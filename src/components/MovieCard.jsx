import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className="w-48 px-2">
        <img src={IMG_CDN_URL + posterpath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard