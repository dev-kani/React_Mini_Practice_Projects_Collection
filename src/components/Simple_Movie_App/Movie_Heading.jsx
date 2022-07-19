
import React from 'react'

const Movie_Heading = (props) => {
    return (
        <nav>
            <h1 className="movies-logo">{props.title}</h1>
        </nav>
    )
}

export default Movie_Heading