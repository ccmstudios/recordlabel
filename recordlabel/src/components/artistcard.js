import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Artistcard = props => {
        return(
            <div>
                <Card style={{ width: '22rem'}}>
  <Card.Img variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Button variant="outline-dark">See more</Button>
  </Card.Body>
</Card>
            </div>
        )
    
}

export default Artistcard