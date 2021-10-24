import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Artistcard from "../../components/artistcard";
import NYG from "../../assets/images/nyg.jpg";
import Starzz from "../../assets/images/starzz.jpg";
import Danitria from "../../assets/images/danitria.jpg";
import Enfinite from "../../assets/images/enfinite.jpg";
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
            <Artistcard name="N.Y.G." img={NYG} />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Artistcard name="Starzz" img={Starzz} />
          </Col>
          <Col>
            <Artistcard name="Danitria" img={Danitria} />
          </Col>
          <Col>
            <Artistcard name="Enfinite" img={Enfinite} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subartists;
