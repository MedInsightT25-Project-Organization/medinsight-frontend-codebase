// import { useState, useEffect } from "react";

// const useAuth = () => {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);

// 	useEffect(() => {
// 		const token = localStorage.getItem("token");
// 		const refreshToken = localStorage.getItem("refreshToken");
// 		console.log("Tokens in localStorage:", { token, refreshToken });
        
// 		if (token && refreshToken) {
// 			setIsAuthenticated(true);
// 		} else {
// 			setIsAuthenticated(false);
// 		}
// 	}, []);

// 	return { isAuthenticated };
// };

// export default useAuth;
