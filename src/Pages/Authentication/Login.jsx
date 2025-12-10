import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Login = () => {

    // From <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
        const {signinwithEmailPass , signInWithGoogle} = useContext(AuthContext) ;


    // Reload dile again Login e niye jay -- solutn
    const location = useLocation() ;
    const LoadingPageNavigate = useNavigate() ;


    // handleLogin
    const handleLogin = (e) => {
        e.preventDefault() ;

        const email = e.target.email.value ;
        console.log("email:", email) ;
        const pass = e.target.pass.value ;
        console.log("pass:", pass) ;


        // signinwithEmailPass
        signinwithEmailPass(email , pass)
        .then(signinE => {
            console.log("User Logged-In using Email-Password: ", signinE.user) ;
            Swal.fire({
            title: "Good!",
            text: "Login Successfully!",
            icon: "success"
            });
            LoadingPageNavigate(location.state ? location.state : '/') ;
        })
        .catch(errsigninE => {
            console.log("Error Code :", errsigninE.code) ;
            console.log("Error Message :", errsigninE.message) ;
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong"
            });
        })
    }



    // handleGoogleSignIn
    const handleGoogleSignIn = () => {
        
        //signInWithGoogle
        signInWithGoogle()
        .then((resG) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("New User Registered by Google: ", resG.user) ;
        Swal.fire({
        title: "Good!",
        text: "Login Successfully!",
        icon: "success"
        });
        LoadingPageNavigate(location.state ? location.state : '/') ;
        // ...
        }).catch((errG) => {
        // Handle Errors here.
        console.log(errG.code);
        console.log(errG.message);
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong"
        });
        });
    }

    return (
         <div className='bg-[#f1f6fa] '>
            <title>Login</title>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col  bg-white md:w-100 lg:w-150 p-10 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='pass' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-neutral mt-4">Login</button>

                                <button onClick={handleGoogleSignIn} className="btn mt-4 text-gray-700"><FcGoogle className='text-xl'></FcGoogle>Login With Google</button> 
                            </fieldset>
                        </form>
                        <p className='text-md font-medium text-center'>Don't have an account?<Link className='text-blue-600 font-bold' to={'/register'}> Register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;