import React, {Fragment} from 'react'

const movieDetail = ({data}) => {
    return (
        <Fragment>
            <div style={{width:'100%'}}>
                <div style={{float:'left'}} width={300} style={{height:'100%'}}>
                    <img src={data.medium_cover_image} width={300} />
                </div>
                <div style={{float:'right'}} style={{width:'calc(100% - 300px)', height:'100%'}}>
                    {data.title}
                </div>
            </div>
        </Fragment>
    )
}

export default movieDetail