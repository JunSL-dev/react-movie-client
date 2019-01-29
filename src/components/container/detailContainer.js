import React, {Fragment} from 'react'

import MovieDetail from './movieDetail'
import SuggestionDetail from './suggestionDetail'

const detailContainer = (props) => {
    return (
        <Fragment>
            <MovieDetail
                data={props.movie}
            />
            <SuggestionDetail
                data={props.suggestions}
            />
        </Fragment>
    )
}

export default detailContainer