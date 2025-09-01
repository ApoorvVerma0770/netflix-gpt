import React,{useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged , unsubscribe } from "firebase/auth";
  import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, LOGO_BG } from '../utils/constants';

const Header = () => {
    const user =useSelector(store => store.user)
    const dispatch = useDispatch();
  const navigate = useNavigate()

   const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
     navigate("/error")
    });
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
   
   const {uid,email,displayName} = user;
   dispatch(addUser({uid :uid,email :email,displayName:displayName}));
   navigate("/browse");
 }

 else {
  dispatch(removeUser()); 
  navigate("/");
 }
});
return ()   => unsubscribe();
},[])

  return (
    
    
    <div className="absolute w-screen py-6 px-4 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-52"
         src={LOGO}
             alt="logo"
           />
          {user && <div className="flex p-2">
            <img className="w-12 h-12 " alt="userLogo" src={LOGO_BG}
             />
             <button onClick={handleSignOut} className="font-bold text-white">(Sign out)</button>
           </div>}
    </div>
   
  )
}

export default Header;