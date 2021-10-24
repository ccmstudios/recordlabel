import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Groupshot from '../assets/images/groupshot.jpg'
import Record from '../assets/images/record.png'

const Songcard = props => {
        return(
            <div>
                <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Button variant="outline-dark">See more</Button>
  </Card.Body>
</Card>
<div className='parent'>
<img className ='imageone' src ={props.artist}/>
<img id ='imagetwo' className='record' src ={Record}/>
</div>
            </div>
        )
    
}

export default Songcard