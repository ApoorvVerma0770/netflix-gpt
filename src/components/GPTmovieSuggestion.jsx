import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'
const GPTmovieSuggestion = () => {

  const {movieNames , movieResults} = useSelector((store)=>store.gpt)
  if (!movieNames || !movieResults) {
    return null;
  }

  return (
    <div className="p-4 m-4 bg-black bg-opacity-65"> 
     {movieNames.map((movieNames,index) => (<MovieList key={movieNames} title={movieNames} movies ={movieResults[index]}/>))}
   </div>
  )
}

export default GPTmovieSuggestion

