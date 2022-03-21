import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DisplayVehicles = ({ vehicle }) => {
  return (
    <>
    { 
      vehicle &&
      <Card>
      <Card.Body>
        <Card.Title>{ vehicle.name }</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Model: { vehicle.model }</ListGroup.Item>
        <ListGroup.Item>Cost: { vehicle.cost_in_credits } credits</ListGroup.Item>
        <ListGroup.Item>Manufacturer: { vehicle.manufacturer }</ListGroup.Item>
        <ListGroup.Item>Passengers: { vehicle.passengers }</ListGroup.Item>
        <ListGroup.Item>Max Speed: { vehicle.max_atmosphering_speed }</ListGroup.Item>
        <ListGroup.Item>Cargo capacity: { vehicle.cargo_capacity }</ListGroup.Item>
      </ListGroup>
      </Card>
    }
  </>
  )
}

export default DisplayVehicles