import React from "react";
import Subartists from "../artists/subartist";
import Bigscreen from '../../assets/images/bigscreen.jpg'
import Submusic from "../music/submusic";
import Subvideos from "../videos/subvideos";
import Subnews from "../news/subnews";
import record from '../../assets/images/record.png'


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>        <img src={record} className="record" alt="logo" />

        <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <img id="bannerimage" src={Bigscreen} />
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
