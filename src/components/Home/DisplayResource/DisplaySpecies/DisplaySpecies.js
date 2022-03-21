import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DisplaySpecies = ({ specie }) => {
  return (
    <>
      { 
        specie &&
        <Card>
        <Card.Body>
          <Card.Title>{ specie.name }</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Classification: { specie.classification }</ListGroup.Item>
          <ListGroup.Item>Language: { specie.language }</ListGroup.Item>
          <ListGroup.Item>Designation: { specie.designation }</ListGroup.Item>
          <ListGroup.Item>Lifespan: { specie.average_lifespan } years</ListGroup.Item>
        </ListGroup>
        </Card>
      }
    </>
  )
}

export default DisplaySpecies