import { logDOM } from '@testing-library/dom'
import React from 'react'

const Movie_Heading = (props) => {
    return (
        <nav>
            <h1>{props.title}</h1>

        </nav>
    )
}

export default Movie_Heading