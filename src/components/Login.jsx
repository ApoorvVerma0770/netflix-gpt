import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    
    const [IsSignForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage] = useState();
    const dispatch = useDispatch()
  
    const name= useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const enteredName = !IsSignForm ? (name.current?.value || "") : "";

    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value, password.current.value, enteredName);
        setErrorMessage(message);
       if(message) return;

       if(!IsSignForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Sign up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            }).then(() => {
                            const {uid,email,displayName} = auth.currentUser;
                            dispatch(addUser({uid :uid,email :email, displayName : displayName}))
              
            }).catch((error) => {
             setErrorMessage(error.message);
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +"-"+ errorMessage);
            console.log(errorCode +"-"+ errorMessage);
          });
        
       }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Sign in
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
             setErrorMessage(errorCode +"-"+ errorMessage);
            });
        }


    }

     const toggleSignInForm = () => {
        setIsSignInForm(!IsSignForm);
     }

      return (
    <div>
        <Header/>
        <div className="absolute">
           <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
            alt="logo-bg"/>
        </div>
        <form  onSubmit={(e)=> e.preventDefault() } className="absolute w-3/12 right-0 left-0 p-12 my-36 mx-auto bg-black text-white opacity-85 rounded-lg">
        <h1 className="text-3xl py-4 font-bold">{IsSignForm ? "Sign In" : "Sign Up"}</h1> <></>
        { !IsSignForm && <input ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700"
            />}
            <input ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-4 bg-gray-700"
            />
            <input ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-700"
            />
            <p className="text-red-600 py-3">{errorMessage}</p>
            <button onClick={handleButtonClick} className="my-6 p-4 w-full  bg-red-700 rounded-lg">{IsSignForm ? "Sign In" : "Sign Up"}</button>
            <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {IsSignForm ? "New to Netflix? Sign Up now" : "Already a User ? Sign In"}
            </p>
            
        </form>
    </div>
  )
}

export default Login