import React, {useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {  {/**Main.jsx er all {router} ekhne children hishebe ashe */}

    // createUserWithEmailAndPassword
    const regWithEmailPass = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password) ;
    }

    // signInWithEmailAndPassword(auth, email, password)
    const signinwithEmailPass = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password) ;
    }
    
    // Update a user's profile
    const [user , setUser] = useState(null) ;
    const updateProf = (nameVal , photoVal) => {
        return updateProfile(auth.currentUser, {
            displayName: nameVal, photoURL: photoVal 
            }).then(() => {
            // Profile updated!
               setUser( {...user , displayName: nameVal, photoURL: photoVal} ) ;
            })
    }



    // To sign in with a pop-up window, call signInWithPopup
    const Googleprovider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, Googleprovider) ;
    }

    // To sign out a user
    const signOutGoogle  = () => {
        return signOut(auth)
    }



    // Get the currently signed-in user
    //  const currentlySignedIn = () => {           
    //     return onAuthStateChanged(auth, (user)    //Need to make it Global
    //  }

    // Get the currently signed-in user GLOBALLY--> It uses for Track logged-in and out of a user
     useEffect( () => {
        const unSubscibe = onAuthStateChanged(auth , (curr_user) => {
            setUser(curr_user) ;
        })
        return unSubscibe ;
     } , [])

    

    // **********************************************
    const authData = {regWithEmailPass , signinwithEmailPass , signInWithGoogle , signOutGoogle , user , } ;
    return <AuthContext.Provider value={authData}>
        {children}          {/*Everything(every route in main.jsx) inside {children} can access authData using obj destructuring. Thats why used UseContext to avoid prop drilling*/}
    </AuthContext.Provider>
    // **********************************************
};

export default AuthProvider;