import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/_home';
import { PeoplePage } from '../pages/_people';

const Root = () => {
  return (
    <Routes>
      <Route path="/CD_MERN_React_LukeApiwalker-Core" element={ <Navigate to="/CD_MERN_React_LukeApiwalker-Core/home"/> } />
      <Route path="/CD_MERN_React_LukeApiwalker-Core/home" element={ <HomePage /> } />
      <Route path="/CD_MERN_React_LukeApiwalker-Core/:peopleId" element={ <PeoplePage />} />
    </Routes>
  )
}

export default Root;