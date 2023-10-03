import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user , setUser ] = useState([])

    // register / create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    



    //signIn 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

      // log/sign out
    const logOut = () => {
        return signOut(auth)
        
    }



    //  set user(onAuthStateChanged) 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])




    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider >
    );
};


AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;