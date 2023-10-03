import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user , setUser ] = useState([])
    const [loading, setLoading] = useState(true)

    // register / create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    



    //signIn 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

      // log/sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }



    //  set user(onAuthStateChanged) 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])




    const authInfo = {
        user, loading,
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