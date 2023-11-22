import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { path } from '@/constantes';

import { CharacterScene } from '@/scenes';

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={path.GRIDMORTADELO}
          element={<CharacterScene></CharacterScene>}
        ></Route>
      </Routes>
    </Router>
  );
};
