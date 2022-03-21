import React from 'react';
import DisplayPeople from './DisplayPeople/DisplayPeople';
import DisplayFilms from './DisplayFilms/DisplayFilms';
import DisplayPlanets from './DisplayPlanets/DisplayPlanets';
import DisplaySpecies from './DisplaySpecies/DisplaySpecies';
import DisplayStarships from './DisplayStarships/DisplayStarships';
import DisplayVehicles from './DisplayVehicles/DisplayVehicles';

const DisplayResource = ({ resource }) => {

  const display = () => {
    switch(resource?.type) {
      case 'films':
        return <DisplayFilms film={ resource?.data }/>
      case 'people':
        return <DisplayPeople people={ resource?.data }/>
      case 'planets':
        return <DisplayPlanets planet={ resource?.data }/>
      case 'species':
        return <DisplaySpecies specie={ resource?.data }/>
      case 'starships':
        return <DisplayStarships starship={ resource?.data }/>
      case 'vehicles':
        return <DisplayVehicles vehicle={ resource?.data }/>
      default:
        return <div className="pt-3 container"><h3>Hmm, we cannot display {resource?.type} resource yet</h3></div>
    }
  }

  return (
    <div className="container p-3">
      {
        resource ? display() : <h3>Search to display a resource</h3>
      }
    </div>
  )
}

export default DisplayResource;