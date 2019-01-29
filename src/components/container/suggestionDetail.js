import React, {Fragment} from 'react'

const suggestionDetail = ({data}) => {
    return <Fragment>
        {data.map(movie => {
            return movie.title
        })}
    </Fragment>
}

export default suggestionDetail