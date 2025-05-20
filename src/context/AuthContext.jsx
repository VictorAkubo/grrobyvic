// src/context/AuthContext.js (or AppContext.js)
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [profile, setProfile] = useState({});
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token") || "");
    const [isLoading, setIsLoading] = useState(false);

    /*  const token = localStorage.getItem('authToken'); */

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/user_profile/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setProfile(response.data.data);
            } catch (error) {
                console.error('Failed to load user profile:', error.response?.data?.message || error.message);
            }
        };

        fetchProfile();
    }, []);
    return (
        <AppContext.Provider
            value={{
                profile,
                accessToken,
                setAccessToken,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Custom hook for cleaner usage
export const useAppContext = () => useContext(AppContext);
