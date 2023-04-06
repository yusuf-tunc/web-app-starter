import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
