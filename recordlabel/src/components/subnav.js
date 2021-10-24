import React from 'react'
import Youtube from '../assets/images/youtube.png'
import Apple from '../assets/images/apple.png'
import Twitter from '../assets/images/twitter.png'
import Spotify from '../assets/images/spotify.png'

class Subnav extends React.Component{
    render(){
        return(
            <div>
                <ul id='subnav'>
                    <li><a href="https://music.apple.com/us/album/the-one-for-me/430858341?i=430858385" target="_blank" rel='noreferrer'><img src ={Apple}/></a></li>
                    <li><a href='https://open.spotify.com/album/2t49EIZCgRZleuuFNDSJWK' target='_blank' rel='noreferrer'><img src ={Spotify}/></a></li>
                    <li><a href =''><img src ={Twitter}/></a></li>
                    <li><a href ='https://www.youtube.com/watch?v=O4flosttkZg' target='_blank' rel='noreferrer'><img src ={Youtube}/></a></li>

                </ul>
            </div>
        )
    }
}

export default Subnav;