import React, { useRef } from 'react'
import lang from '../utils/language';
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GPTsearchBAR = () => {
  const Textsearch = useRef(null)
  const dispatch = useDispatch();

  const searchMovieInTMDB = async(movie)=> {
    const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()

    return json.results;
  }

  const HandleGPTsearches= async ()=> {
    //console.log(Textsearch.current.value)

    const Query ="Act as a movie recommendation system for the Query : "+Textsearch.current.value+ ". you have to only give me 5 movies based on your best search results and i am giivng you a example you have to give like that only. Example : F1 , Koi mil gaya , De Dana Dan , Singham ,I Know What You Did Last Summer"


      const gptResults  = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: Query,
      });
      //console.log(gptResults.text);

      const gptMovies = gptResults.text.split(",")
      //console.log(gptMovies);


      const promiseArray = gptMovies.map((movie)=> searchMovieInTMDB(movie))
      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:  gptMovies , movieResults : tmdbResults}))

  
}

const LingoChange = useSelector((store)=>store.config.lang)

  return (
    <div className="pt-[12%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" ref={Textsearch} 
       placeholder={lang[LingoChange].gptSearchPlaceholder} 
       className="p-4 m-4 col-span-9 rounded-xl"/>
      <button className="col-span-3 bg-red-700 m-4 text-white px-2 py-2 rounded-xl"
      onClick={HandleGPTsearches}
      >
     {lang[LingoChange].search}
      </button>
    </form>
    </div>
  )
}

export default GPTsearchBAR