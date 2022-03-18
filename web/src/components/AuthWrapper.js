import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthWrapper = (props) => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: process.env.REACT_APP_AUTH0_AUDIENCE, /// <-- This is the API endpoint
                    // scope: '', /// <-- This is the scope for the API endpoint (optional and better to skip for most cases)
                });
                // console.log(token);
                setAuthToken(token);/// Set this to Global State (redux) or localstorage.
                /// check README.md for more info.
            } catch (e) {
                console.error(e);
            }
        })();
    }, [getAccessTokenSilently]);

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton
                    title="Click to Logout"
                />
            </div>
        ) : (
            <div>
                <LoginButton
                    title="Click to Login"
                />
                <br />
                {
                    props.children
                }
            </div>
        )
    );
};

export default AuthWrapper;