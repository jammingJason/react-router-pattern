import React from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: 'whiskey',
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Duke',
      age: 3,
      src: 'duke',
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      name: 'Perry',
      age: 4,
      src: 'perry',
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: 'tubby',
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={App.defaultProps.dogs} />
        <Routes>
          <Route
            exact="true"
            path="/dogs"
            element={<DogList dogs={App.defaultProps.dogs} />}
          />
          <Route
            exact="true"
            path="/dogs/:name"
            element={<DogDetails dogs={App.defaultProps.dogs} />}
          />

          <Route path="/*" element={<DogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
