import React from "react";
import Subartists from "../artists/subartist";
import Concert from '../../assets/images/concert.jpg'
import Submusic from "../music/submusic";
import Subvideos from "../videos/subvideos";
import Subnews from "../news/subnews";


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <img id="bannerimage" src={Concert} />
            </div>
          </div>
        </div>
        <Subartists />
        <hr></hr>
        <Submusic/>
        <hr></hr>
        <Subvideos/>
<hr></hr>      
<Subnews/>
</div>
    );
  }
}

export default Home;
