import React from 'react';
import HeatMotionProvider from './redux/Provider';
import Router from './Router';

const App = () => {
  return (
    <HeatMotionProvider>
      <Router />
    </HeatMotionProvider>
  );
};

export default App;
