import { createContext, useState, useEffect } from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// - createContext: Creates a shared data container
// Creates a container with default values:
// currentUser: Starts as null (no user)
// setCurrentUser: A placeholder function
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};