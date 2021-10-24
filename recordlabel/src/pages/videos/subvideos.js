import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Artistcard from "../../components/artistcard";
import ReactPlayer from "react-player";

class Subvideos extends React.Component {
  render() {
    return (
      <div>
        <h1>Videos</h1>
        <Link to="/videos">
          <a href="">View All</a>
        </Link>
        <Row>
          <Col id="maincard">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=nfWlot6h_JM"
                width="540px"
                height="540px"
              />
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=adLGHcj_fmA"
                width="320px"
                height="320px"
              />
            </div>
          </Col>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=VYOjWnS4cMY"
                width="320px"
                height="320px"
              />
            </div>
          </Col>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=rYEDA3JcQqw"
                width="320px"
                height="320px"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subvideos;
