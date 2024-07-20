import React from 'react';
import Mainpage from '../components/Mainpage';
import ProjetsDescription from '../components/ProjetsDescription';
import ProtectedRoute from '../components/ProtectedRoute';

const HomePage = () => {
  return (
    <ProtectedRoute>
    <div>
      <Mainpage />
      <ProjetsDescription />
    </div>
    </ProtectedRoute>
  );
};

export default HomePage;
