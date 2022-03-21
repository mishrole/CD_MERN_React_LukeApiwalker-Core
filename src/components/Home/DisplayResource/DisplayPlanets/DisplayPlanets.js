import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DisplayPlanets = ({ planet }) => {
  return (
    <>
      { 
        planet &&
        <Card>
        <Card.Body>
          <Card.Title>{ planet.name }</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Climate: { planet.climate }</ListGroup.Item>
          <ListGroup.Item>Terrain: { planet.terrain }</ListGroup.Item>
          <ListGroup.Item>Population: { planet.population }</ListGroup.Item>
          <ListGroup.Item>Diameter: { planet.diameter }</ListGroup.Item>
        </ListGroup>
        </Card>
      }
    </>
  )
}

export default DisplayPlanets