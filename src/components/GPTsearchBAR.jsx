import React from 'react'
import lang from '../utils/language';
import { useSelector } from 'react-redux';

const GPTsearchBAR = () => {
const LingoChange = useSelector((store)=>store.config.lang)

  return (
    <div className="pt-[12%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
      <input type="text" 
       placeholder={lang[LingoChange].gptSearchPlaceholder} 
       className="p-4 m-4 col-span-9 rounded-xl"/>
      <button className="col-span-3 bg-red-700 m-4 text-white px-2 py-2 rounded-xl">
     {lang[LingoChange].search}
      </button>
    </form>
    </div>
  )
}

export default GPTsearchBAR;