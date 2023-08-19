import React from 'react';
import HeatMotionProvider from './redux/Provider';
import Router from './Router';
import FetchUserLocation from './utils/fetchUserLocation';

const App = () => {
  return (
    <HeatMotionProvider>
      <Router />
      <FetchUserLocation />
    </HeatMotionProvider>
  );
};

export default App;
