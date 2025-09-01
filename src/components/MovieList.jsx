import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
    if (!movies || movies.length === 0) {
        return null;
    }
  return (
    <div className="p-2">
        <h1 className="text-2xl py-2 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
            <div className="flex">
                {movies.map((movie) => (<MovieCard key={movie.id} posterpath={movie.poster_path}/>))}
            </div>
        </div>
    
    </div>
  )
}

export default MovieList