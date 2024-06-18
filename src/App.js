import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Programs from './components/Programs';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Intro />
      <Programs />
      <Contact />
    </div>
  );
};

export default App;
