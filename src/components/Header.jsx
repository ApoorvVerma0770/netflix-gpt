import React,{useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged , unsubscribe } from "firebase/auth";
  import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, LOGO_BG, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const user =useSelector(store => store.user)
    const dispatch = useDispatch();
  const navigate = useNavigate()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

 const handleGPTsearch = () => {
dispatch(toggleGptSearchView())
 }
 
 const handleLanguageChange=(e) => {
  dispatch(changeLanguage(e.target.value))
 }



  return (
    
    
    <div className="absolute w-screen py-4 px-4 bg-gradient-to-b from-black  z-10 flex justify-between">
        <img className="w-52"
         src={LOGO}
             alt="logo"
           />
          {user && <div className="flex p-2">
            {showGptSearch && <select className="  mb-8 p-2  bg-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANG.map((lang) => <option value={lang.identifier} key={lang.identifier} >
                {lang.name}
                </option>)}
              
            </select>}
            <button className="px-4 mt-0 mx-2 my-8 py-2 bg-violet-500 rounded-lg "
             onClick={handleGPTsearch}>{showGptSearch ? "Home" : "GPT Search"}</button>
            <img className="w-12 h-12 " alt="userLogo" src={LOGO_BG}
             />
             <button onClick={handleSignOut} className="font-bold text-white">(Sign out)</button>
           </div>}
    </div>
   
  )
}

export default Header;