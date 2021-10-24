import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import Artistcard from '../../components/artistcard'


class Subnews extends React.Component{
    render(){
        return(
            <div>
     <h1>News</h1>
     <Link to ='/news'><a href=''>View All</a></Link>

     <Row>
         <Col id='maincard'><Artistcard/></Col>
     </Row>
     <Row>
         <Col><Artistcard/></Col>
         <Col><Artistcard/></Col>
         <Col><Artistcard/></Col>
     </Row>

            </div>
        )
    }
}

export default Subnews;