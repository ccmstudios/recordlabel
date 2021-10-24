import React from 'react'
import Artists from '../pages/artists/artists';
import Home from '../pages/home/home';
import Merch from '../pages/merch/merch';
import Music from '../pages/music/music';
import News from '../pages/news/news';
import Videos from '../pages/videos/videos';
import  {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul id='navbar'>
                    <li><Link to ='/'><a href={Home}>Home</a></Link></li>
                    <li> <Link to ='/artists'><a href={Artists}>Artists</a></Link></li>
                    <li> <Link to ='/music'><a href={Music}>Music</a></Link></li>
                    <li> <Link to ='/videos'><a href={Videos}>Videos</a></Link></li>
                    <li> <Link to ='/news'><a href={News}>News</a></Link></li>
                    <li> <Link to ='/merch'><a href={Merch}>Merch</a></Link></li>

                </ul>
            </div>
        )
    }
}

export default Navbar;