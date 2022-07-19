import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import Movie_List from './Movie_List';
import Movie_Heading from './Movie_Heading';
import Movie_Search from './Movie_Search';
import Add_Favourites from './Add_Favourites';


const Simple_Movie_App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('Avatar');
    const [favourites, setFavourites] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6d394752`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }

    }

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue])

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    return (
        <>
            <div className="movies-navbar">
                <Movie_Heading title="Search Movies" />
                <Movie_Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className="movie-container">
                <Movie_List
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={Add_Favourites}
                />
            </div>

            <div>
                {/* <Movie_Heading title="Favourites" /> */}

            </div>
            {/* <div>
                <Movie_List
                    movies={favourites}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={Add_Favourites}
                />
            </div> */}
        </>
    )
}

export default Simple_Movie_App