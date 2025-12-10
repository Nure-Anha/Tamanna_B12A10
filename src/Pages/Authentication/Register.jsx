import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { auth } from './Auth/Firebase.config';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const Register = () => {

    // From <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
    const {regWithEmailPass , signInWithGoogle} = useContext(AuthContext) ;

    // handleRegister
    const handleRegister = (e) => {
        e.preventDefault() ;

        const name = e.target.name.value ;
        console.log("name:", name) ;
        const email = e.target.email.value ;
        console.log("email:", email) ;
        const photoURL = e.target.photoURL.value ;
        console.log("photoURL:", photoURL) ;
        const pass = e.target.pass.value ;
        console.log("pass:", pass) ;


        // REGEX
        const upperCase = /[A-Z]/ ;
        const loweCase = /[a-z]/ ;
        if(!upperCase.test(pass)) {
           return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Must have an UpperCase letter in the password!"
            });
        }
        if(!loweCase.test(pass)) {
           return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Must have an LowerCase letter in the password!"
            });
        }
        if(pass.length < 6) {
           return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password Length must be at least 6 character"
            });
        }


        e.target.reset() ;
        // regWithEmailPass & updateProfile
        regWithEmailPass(email , pass)
        .then(resregE => {
            console.log("New User Registered by Email-Password: ", resregE.user) ; // displayName & photoURL is null so need to Update them
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoURL
                }).then(() => {
                // Profile updated!
                   console.log("displayName & photoURL Updated :", auth.currentUser) ;
                   Swal.fire({
                    title: "Good!",
                    text: "Account is Registered Successfully!",
                    icon: "success"
                    });
                })
                .catch((errE) => {
                // An error occurred
                 console.log("Error occured in Reg with Email-Pass :", errE.message) ;

                });
            })
            .catch(errregE => {
            console.log("Error Code :", errregE.code) ;
            console.log("Error Message :", errregE.message) ;
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong"
            });
        })
    }



    // handleGoogleSignUp
    const handleGoogleSignUp = () => {
        
        //signInWithGoogle
        signInWithGoogle ()
        .then((resG) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("New User Sign-Up by Google: ", resG.user) ;
        Swal.fire({
                    title: "Good!",
                    text: "Account is Registered Successfully!",
                    icon: "success"
                    });
        // ...
        }).catch((errG) => {
        // Handle Errors here.
        console.log(errG.code);
        console.log("Error occured in Reg with Google" , errG.message);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong"
            });
        });
    }




    return (
        <div className=' bg-[#f1f6fa] '>
            <title>Register</title>
            

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse bg-white p-10 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Sign Up!</h1>
                        <p className='text-gray-500'><span className='font-semibold text-lg'>PawsNest - Pet Adoption & Supply Portal</span> <br />It is a community-driven platform where pet owners,  breeders, <br /> and shops can list pets for adoption or <br /> sell pet-related products (food, toys, accessories, etc). Buyers and <br /> adopters can browse, contact, and order directly. </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <fieldset className="fieldset">

                                        <label className="label">Name</label>
                                        <input type="text" name='name' className="input" placeholder="Enter Your Full Name" />
                                        <label className="label">Email</label>
                                        <input type="email" name='email' className="input" placeholder="Your Email" />
                                        <label className="label">PhotoURL</label>
                                        <input type="text" name='photoURL' className="input" placeholder="Enter Your PhotoURL" />

                                        <label className="label">Password</label>
                                        <input type="password" name='pass' className='input' placeholder='Enter Your Password'/>

                                        
                                        <button className="btn btn-neutral mt-4">Register</button>


                                       <button onClick={handleGoogleSignUp} className="btn mt-4 text-gray-700"><FcGoogle className='text-xl'></FcGoogle>Sign Up With Google</button> 
                                    </fieldset>
                                </form>
                                <p className='text-md font-medium text-center'>Already have an account? <Link className='text-blue-600 font-bold' to={'/login'}>Login here </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Register;