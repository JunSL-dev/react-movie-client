import React from 'react'

import { Query } from 'react-apollo'

import { mainQuery } from '../../query'
import { CircularProgress } from 'material-ui';

import MovieItem from '../MovieItem'

const mainContainer = () => {
    return <Query query={mainQuery}>
        {
            ({loading, error, data}) => {
                if(loading) return (
                    <div style={{
                        width:'100%',
                        height:'100%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <CircularProgress
                            size={300}
                            color="#FF9800"
                        />
                    </div>
                )
                return <div>
                    {
                        data.movies.map(movie => {
                            return <MovieItem
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                rating={movie.rating}
                                runtime={movie.runtime}
                                genre={movie.genres}
                                summary={movie.description_full}
                                image={movie.medium_cover_image}
                            />
                        })
                    }
                </div>
            }
        }
    </Query>
}

export default mainContainer