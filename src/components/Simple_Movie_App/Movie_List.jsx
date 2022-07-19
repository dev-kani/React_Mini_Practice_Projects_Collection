import React from 'react'

const Movie_List = props => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className="img-container">
                    <img src={movie.Poster} alt="movies" />
                    <div
                        className="overlay"
                    // onClick={() => props.handleFavouritesClick(movie)}
                    >
                        {/* <FavouriteComponent /> */}
                    </div>
                    <p className="movie-title">{movie.Title}</p>
                    <p className="movie-title">({movie.Year})</p>

                </div>
            ))}
        </>
    )
}

export default Movie_List