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
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subvideos;
