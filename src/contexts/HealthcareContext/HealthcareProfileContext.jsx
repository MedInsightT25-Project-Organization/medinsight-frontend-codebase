import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
    useMemo
} from 'react';
import API from '../../services/api';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

// Create the context
const HealthcareProfileContext = createContext();

// Custom hook to access the context
export const useHealthcareProfile = () => {
    const context = useContext(HealthcareProfileContext);
    if (!context) {
        throw new Error('useHealthcareProfile must be used within a HealthcareProfileProvider');
    }
    return context;
};

// Provider component
export const HealthcareProfileProvider = ({ children }) => {
    const { token, user: authUser } = useAuth();
    const navigate = useNavigate();

    const [state, setState] = useState({
        profile: null,
        loading: false,
        error: null,
        hasCompletedOnboarding: false,
        isEmailVerified: false,
        requiresRedirect: null
    });

    // Fetch profile function
    const fetchHospitalAdminProfile = useCallback(async (userId, signal) => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));

            console.log('Fetching profile for userId:', userId);
            const res = await API.get(`/hospitals/profile/${userId}`, { signal });
            console.log('API Response:', res);

            const profile = res.data?.data;
            if (!profile) throw new Error('No profile data received');

            const hospitalAdmin = profile?.hospitalAdmin || {};
            const isEmailVerified = hospitalAdmin.isEmailVerified;
            const hasCompletedProfile = hospitalAdmin.hasCompletedProfile;

            let redirectTo = null;
            if (!isEmailVerified) {
                redirectTo = 'verify-email';
            } else if (!hasCompletedProfile) {
                redirectTo = 'healthcare-form-one';
            }

            setState(prev => ({
                ...prev,
                profile,
                hasCompletedOnboarding: hasCompletedProfile,
                isEmailVerified,
                requiresRedirect: redirectTo,
                loading: false
            }));

            return profile;
        } catch (err) {
            console.error('Profile fetch error:', err);
            if (err.response) {
                console.error('Response Data:', err.response.data);
                console.error('Response Status:', err.response.status);

                if (err.response.status === 404) {
                    // If profile doesn't exist yet, set requiresRedirect to form
                    setState(prev => ({
                        ...prev,
                        profile: null,
                        hasCompletedOnboarding: false,
                        isEmailVerified: authUser?.isEmailVerified || false, // Use authUser's email verification status
                        requiresRedirect: authUser?.isEmailVerified ? 'healthcare-form-one' : 'verify-email',
                        loading: false,
                        error: null
                    }));
                    return null;
                }
            } else {
                console.error('Error Message:', err.message);
            }

            if (!signal?.aborted) {
                setState(prev => ({
                    ...prev,
                    error: err.response?.data?.message || err.message,
                    loading: false
                }));
            }
            throw err;
        }
    }, [authUser?.isEmailVerified]); // Add authUser.isEmailVerified as dependency

    // Fetch profile on mount or authUser/token change
    useEffect(() => {
        const abortController = new AbortController();

        if (token && authUser?.id) {
            // Check email verification and registration status from authUser first
            if (!authUser.isEmailVerified) {
                setState(prev => ({
                    ...prev,
                    isEmailVerified: false,
                    requiresRedirect: 'verify-email',
                    loading: false
                }));
            } else {
                fetchHospitalAdminProfile(authUser.id, abortController.signal);
            }
        } else {
            resetProfile();
        }

        return () => abortController.abort();
    }, [token, authUser, fetchHospitalAdminProfile]);

    // Handle onboarding form submission
    const completeOnboarding = async (profileData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const res = await API.post('/hospitals/profile/create', profileData);
            const profile = res.data?.data;

            if (!profile) throw new Error('No profile returned after creation');

            const hospitalAdmin = profile.hospitalAdmin || {};
            const isEmailVerified = hospitalAdmin.isEmailVerified;

            const hasRequiredFields = (
                profile.name &&
                profile.address &&
                profile.contactNumber &&
                profile.city &&
                profile.state &&
                profile.country
            );

            setState(prev => ({
                ...prev,
                profile,
                hasCompletedOnboarding: hasRequiredFields,
                isEmailVerified,
                requiresRedirect: null,
                loading: false
            }));

            return res.data;
        } catch (err) {
            console.error('Onboarding error:', err);
            setState(prev => ({
                ...prev,
                error: err.response?.data?.message || err.message,
                loading: false
            }));
            throw err;
        }
    };

    // Called when email verification succeeds
    const verifyEmailSuccess = () => {
        setState(prev => ({
            ...prev,
            isEmailVerified: true,
            requiresRedirect: prev.profile ? null : 'healthcare-form-one'
        }));

        // If we have a user ID, refetch the profile after email verification
        if (authUser?.id) {
            fetchHospitalAdminProfile(authUser.id);
        }
    };

    // Reset profile state
    const resetProfile = () => {
        setState({
            profile: null,
            loading: false,
            error: null,
            hasCompletedOnboarding: false,
            isEmailVerified: false,
            requiresRedirect: null
        });
    };

    // Memoized context value
    const contextValue = useMemo(() => ({
        ...state,
        fetchHospitalAdminProfile: () =>
            authUser?.id
                ? fetchHospitalAdminProfile(authUser.id)
                : Promise.reject('No user ID'),
        createProfile: completeOnboarding,
        resetProfile,
        verifyEmailSuccess
    }), [state, authUser?.id, fetchHospitalAdminProfile]);

    return (
        <HealthcareProfileContext.Provider value={contextValue}>
            {children}
        </HealthcareProfileContext.Provider>
    );
};