import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Artistcard from "../../components/artistcard";
import Redpose from "../../assets/images/redpose.jpg";
import Smokeartist from "../../assets/images/smokeartist.jpg";
import Album from "../../assets/images/album.jpg";
import Miccheck from "../../assets/images/miccheck.jpg";
import record from '../../assets/images/record.png'
import './music.css'

class Submusic extends React.Component {
  render() {
    return (
      <div>
        <h1>Music</h1>
        <Link to="/music">
          <a href="">View All</a>
        </Link>

        <Row>
          <Col id="maincard">
            <Artistcard name="Bravo feat Pooh Bear" img={Album} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Artistcard name="Bravo feat Pooh Bear" img={Smokeartist} />
          </Col>
          <Col>
            <Artistcard name="Bravo feat Pooh Bear" img={Redpose} />
          </Col>
          <Col>
            <Artistcard name="Bravo feat Pooh Bear" img={Miccheck}  />

          </Col>
        </Row>
      </div>
    );
  }
}

export default Submusic;
