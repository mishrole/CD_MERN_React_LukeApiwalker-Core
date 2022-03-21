import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import DisplayPeople from '../../components/Home/DisplayResource/DisplayPeople/DisplayPeople';
import { getPeopleById } from '../../helpers/getPeopleById';

export const PeoplePage = () => {
  const { peopleId } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    getPeopleById(peopleId)
    .then(peopleData => {
      setPeople(peopleData);
    });
  }, [peopleId])

  return (
    <div className="text-center">
      <Header />
      <div className="container p-3">
        <DisplayPeople people={ people }/>
      </div>
    </div>
  )
}