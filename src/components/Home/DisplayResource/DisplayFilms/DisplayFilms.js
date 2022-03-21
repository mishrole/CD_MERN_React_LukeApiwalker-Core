import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DisplayFilms = ({ film }) => {
  return (
    <>
      { 
        film &&
        <Card>
        <Card.Body>
          <Card.Title>{ film.title }</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Episode: { film.episode_id }</ListGroup.Item>
          <ListGroup.Item>{ film.opening_crawl }</ListGroup.Item>
          <ListGroup.Item>Director: { film.director }</ListGroup.Item>
          <ListGroup.Item>Producer: { film.producer }</ListGroup.Item>
        </ListGroup>
        </Card>
      }
    </>
  )
}

export default DisplayFilms