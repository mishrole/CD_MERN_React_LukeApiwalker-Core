import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/_home';
import { PeoplePage } from '../pages/_people';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home"/> } />
      <Route path="/home" element={ <HomePage /> } />
      <Route path="/:peopleId" element={ <PeoplePage />} />
    </Routes>
  )
}

export default Root;