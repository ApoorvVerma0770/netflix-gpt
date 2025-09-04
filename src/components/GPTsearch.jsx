import React from 'react'
import GPTsearchBAR from './GPTsearchBAR'
import GPTmovieSuggestion from './GPTmovieSuggestion'
import { NETFLIX_BG } from '../utils/constants'

const GPTsearch = () => {
  return (
    <div>
        <div className="fixed -z-20">
           <img src ={NETFLIX_BG}
            alt="logo-bg"/>
        </div>
        <GPTsearchBAR/>
        <GPTmovieSuggestion/>
    </div>
  )
}

export default GPTsearch