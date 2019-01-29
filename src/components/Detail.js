import React from 'react'

import {Query} from 'react-apollo'
import {detailQuery} from '../query'
 
import DetailContainer from './container/detailContainer'
import { CircularProgress } from 'material-ui';

const detail = ({match:{params:{movieId}}}) => {
    return (
        <Query query={detailQuery} variables={{movieId:parseInt(movieId)}}>
            {
                ({loading, error, data:{movie,suggestions}}) => {
                    if(loading) return <div style={{
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
                    if(error) return "error"
                    return <DetailContainer
                        movie={movie}
                        suggestions={suggestions}
                    />
                }
            }
        </Query>
    )
}

export default detail