import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTsearch from './GPTsearch';

const Browse = () => {
const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

        useNowPlayingMovies();
        usePopularMovies();
        useTopRatedMovies();
        useUpcomingMovies();
  return (
    <div>
      <Header/>
     {

            showGptSearch ? <GPTsearch/> :  <><MainContainer/>  <SecondaryContainer/></>
     
     }
    </div>
  )
}

export default Browse