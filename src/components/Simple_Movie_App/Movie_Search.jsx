import React from 'react'

const Movie_Search = (props) => {


    return (
        <div>
            <input
                type="text"
                value={props.searchValue}
                onChange={(e) => props.setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default Movie_Search