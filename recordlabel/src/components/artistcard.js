import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Artistcard = props => {
        return(
            <div id='artistcard'> 
                <Card style={{ width: '22rem'}}>
  <Card.Img className='overflow'variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Button variant="outline-dark">See more</Button>
  </Card.Body>
</Card>
            </div>
        )
    
}

export default Artistcard