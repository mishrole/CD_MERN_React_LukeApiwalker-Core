import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { getResourceByEndpoint } from '../../../../helpers/getResourceByEndpoint';

const DisplayPeople = ({ people }) => {

  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    if (people) {
      getResourceByEndpoint(people.homeworld)
      .then(planetData => {
        setPlanet(planetData);
      });
    }
  }, [people])

  return (
    <>
      {
        people && 
        <Card>
        <Card.Body>
          <Card.Title>{ people.name }</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Height: { people.height }</ListGroup.Item>
          <ListGroup.Item>Hair Color: { people.hair_color }</ListGroup.Item>
          <ListGroup.Item>Birth Year: { people.birth_year }</ListGroup.Item>
          <ListGroup.Item>Homeworld: { planet && planet.name }</ListGroup.Item>
        </ListGroup>
        </Card>
      }
    </>
  )
}

export default DisplayPeople