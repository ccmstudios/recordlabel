import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Artistcard from "../../components/artistcard";
import Miccheck2 from "../../assets/images/miccheck2.jpg";
import Guitar from "../../assets/images/guitar.jpg";
import Pose from "../../assets/images/pose.jpg";
import Allthelights from "../../assets/images/allthelights.jpg";
import "./artists.css";

class Subartists extends React.Component {
  render() {
    return (
      <div>
        <h1>Artists</h1>
        <Link to="/artists">
          <a href="">View All</a>
        </Link>

        <Row>
          <Col id="maincard">
            <Artistcard name="N.Y.G." img={Guitar} />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Artistcard name="Starzz" img={Allthelights} />
          </Col>
          <Col>
            <Artistcard name="Danitria" img={Pose} />
          </Col>
          <Col>
            <Artistcard name="Enfinite" img={Miccheck2} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subartists;
