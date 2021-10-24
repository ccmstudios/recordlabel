import React from 'react'
import Navbar from './navbar';
import Subnav from './subnav';
import Groupshot4 from '../assets/images/groupshot4.jpg'
import Blakktitan from '../assets/images/blakktitan.jpg'

class Banner extends React.Component{
    render(){
        return(
            <div>
                <img id='blakktitan' src = {Blakktitan}/>
                <Navbar/>
                <Subnav/>

            </div>
        )
    }
}
    export default Banner;