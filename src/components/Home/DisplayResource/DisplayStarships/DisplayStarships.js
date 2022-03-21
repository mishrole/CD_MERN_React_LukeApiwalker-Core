import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DisplayStarships = ({ starship }) => {
  return (
    <>
    { 
      starship &&
      <Card>
      <Card.Body>
        <Card.Title>{ starship.name }</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Model: { starship.model }</ListGroup.Item>
        <ListGroup.Item>Cost: { starship.cost_in_credits } credits</ListGroup.Item>
        <ListGroup.Item>Manufacturer: { starship.manufacturer }</ListGroup.Item>
        <ListGroup.Item>Passengers: { starship.passengers }</ListGroup.Item>
        <ListGroup.Item>Max Speed: { starship.max_atmosphering_speed }</ListGroup.Item>
        <ListGroup.Item>Cargo capacity: { starship.cargo_capacity }</ListGroup.Item>
      </ListGroup>
      </Card>
    }
  </>
  )
}

export default DisplayStarships