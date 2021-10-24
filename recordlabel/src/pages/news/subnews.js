import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import Artistcard from '../../components/artistcard'
import Listen from '../../assets/images/listen.jpg'
import Newartist from '../../assets/images/newartist.jpg'
import Musicapp from '../../assets/images/app.jpg'
import Studio from '../../assets/images/studio.jpg'


class Subnews extends React.Component{
    render(){
        return(
            <div>
     <h1>News</h1>
     <Link to ='/news'><a href=''>View All</a></Link>

     <Row>
         <Col id='maincard'><Artistcard img ={Newartist}/></Col>
     </Row>
     <Row>
         <Col><Artistcard img={Studio}/></Col>
         <Col><Artistcard img={Musicapp}/></Col>
         <Col><Artistcard img={Listen}/></Col>
     </Row>

            </div>
        )
    }
}

export default Subnews;