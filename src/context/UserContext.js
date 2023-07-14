import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const auth = getAuth(app);



const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const login = (email, pass) => {
     return signInWithEmailAndPassword(auth, email, pass)
    }
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(userDetails)=>{
        return updateProfile(auth.currentUser, userDetails)
    }

    useEffect(()=>{
        const authCheker = onAuthStateChanged(auth, authUser => 
        {
            const user = authUser;
            setUser(user);
            setLoading(false);
            // console.log(user?.displayName);
        })
        return () => {
            authCheker();
        }
    }, [])

    const logOut = () => {
        signOut(auth)
        .then(res=>{
            setUser(null)
        })
        .catch(error=>{})
    }

    const authInfo = {createUser, loading, updateUser, login, logOut, user, setUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

UserContext.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default UserContext;