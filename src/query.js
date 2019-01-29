import gql from 'graphql-tag'

export const mainQuery = gql`
    {
        movies{
            id
            title
            rating
            runtime
            genres
            description_full
            medium_cover_image
        }
    }
`

export const detailQuery = gql`
    query detail($movieId:Int!){
        movie(id:$movieId){
            id
            title
            rating
            runtime
            genres
            description_full
            medium_cover_image
        }
        suggestions(id:$movieId){
            id
            title
            rating
            runtime
            genres
            medium_cover_image
        }
    }
`