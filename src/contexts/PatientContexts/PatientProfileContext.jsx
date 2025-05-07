import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import API from '../../services/api';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileContext = createContext();

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};

export const ProfileProvider = ({ children }) => {
    const { token, user: authUser } = useAuth();
    const navigate = useNavigate();
    const [state, setState] = useState({
        profile: null,
        loading: false,
        error: null,
        hasCompletedOnboarding: false,
        isEmailVerified: false,
        requiresRedirect: null // 'verify-email' | 'onboarding' | null
    });

    // Extract user ID from auth user and fetch profile
    const fetchUserProfile = useCallback(async (userId, signal) => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));
            const res = await API.get(`/users/profile/${userId}`, { signal });
            const user = res.data?.data?.user;

            if (!user) throw new Error('No user data received');

            // Check verification and onboarding status
            const needsVerification = !user.isEmailVerified;
            const needsOnboarding = !user.hasCompletedProfile;

            let redirectTo = null;
            if (needsVerification) redirectTo = 'verify-email';
            else if (needsOnboarding) redirectTo = 'onboarding';

            setState(prev => ({
                ...prev,
                profile: user.userProfile || null,
                hasCompletedOnboarding: !needsOnboarding,
                isEmailVerified: !needsVerification,
                requiresRedirect: redirectTo,
                loading: false
            }));

            return user;
        } catch (err) {
            if (!signal?.aborted) {
                setState(prev => ({
                    ...prev,
                    error: err.response?.data?.message || err.message,
                    loading: false
                }));
            }
            throw err;
        }
    }, []);

    // Auto-fetch profile when auth user changes
    useEffect(() => {
        const abortController = new AbortController();

        if (token && authUser?.id) {
            fetchUserProfile(authUser.id, abortController.signal);
        } else {
            resetProfile();
        }

        return () => abortController.abort();
    }, [token, authUser?.id, fetchUserProfile]);

    // Handle redirection based on requirements
    useEffect(() => {
        if (state.requiresRedirect && token && !state.loading) {
            navigate(`/${state.requiresRedirect}`);
        }
    }, [state.requiresRedirect, token, navigate, state.loading]);

    const completeOnboarding = async (profileData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const res = await API.post('/users/profile/create', profileData);
            const user = res.data?.data?.user;

            if (user) {
                setState(prev => ({
                    ...prev,
                    profile: user.userProfile || null,
                    hasCompletedOnboarding: true,
                    requiresRedirect: null,
                    loading: false
                }));
            }
            return res.data;
        } catch (err) {
            setState(prev => ({
                ...prev,
                error: err.response?.data?.message || err.message,
                loading: false
            }));
            throw err;
        }
    };

    const updateProfile = async (profileData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const res = await API.put('/users/profile/update', profileData);
            const user = res.data?.data?.user;

            if (user) {
                setState(prev => ({
                    ...prev,
                    profile: user.userProfile || null,
                    loading: false
                }));
            }
            return res.data;
        } catch (err) {
            setState(prev => ({
                ...prev,
                error: err.response?.data?.message || err.message,
                loading: false
            }));
            throw err;
        }
    };

    const verifyEmailSuccess = () => {
        setState(prev => ({
            ...prev,
            isEmailVerified: true,
            requiresRedirect: prev.hasCompletedOnboarding ? null : 'onboarding'
        }));
    };

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

    return (
        <ProfileContext.Provider
            value={{
                ...state,
                fetchProfile: () => authUser?.id ? fetchUserProfile(authUser.id) : Promise.reject('No user ID'),
                createProfile: completeOnboarding,
                updateProfile,
                resetProfile,
                verifyEmailSuccess
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};