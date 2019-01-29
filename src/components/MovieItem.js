import React from 'react'

import {Link} from 'react-router-dom'
import { Card, CardTitle, CardMedia, CardHeader, CardText } from 'material-ui';

const movieItem = (props) => {
    return(
        <Link to={`/detail/${props.id}`}>
            <Card style={{
                width:'calc(25% - 20px)',
                float:'left',
                margin:'10px 10px'
            }}>
                <CardHeader
                    title={props.title}
                    subtitle={props.genre}
                    avatar="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.envato.com%2Ffiles%2F218337716%2FPNG%2FCAT%2520EMOTICON-04.png&f=1"
                />
                <CardMedia>
                    <img src={props.image} />
                </CardMedia>
                <CardTitle
                    subtitle={<span>{props.runtime}분 <br/>{props.rating}점</span>}
                />
                <CardText style={{
                    height:'140px',
                    overflow:'hidden'
                }}>
                    {props.summary}
                </CardText>
            </Card>
        </Link>
    )
}

export default movieItem