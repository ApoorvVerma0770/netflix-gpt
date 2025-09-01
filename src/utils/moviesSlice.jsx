import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo : null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    }, 
    reducers: {
        addNowPlayingMovies : (state,actions) =>{
        state.nowPlayingMovies = actions.payload;
        },
        addPopularMovies : (state,actions) =>{
            state.popularMovies = actions.payload;
            },
        addTopRatedrMovies : (state,actions) =>{
                state.topRatedMovies = actions.payload;
                },
        addUpcomingMovies : (state,actions) =>{
                    state.upcomingMovies = actions.payload;
                    },
        addTrailerVideo : (state,actions) =>{
            state.trailerVideo = actions.payload;
        }
        
    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedrMovies ,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;