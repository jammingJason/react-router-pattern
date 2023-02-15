import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorNew from './ColorNew';
import ColorDetails from './ColorDetails';
import ColorList from './ColorList';
import Lost from './Lost';
const Colors = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/colors/new" element={<ColorNew />} />
          <Route
            exact="true"
            path="/colors/:color"
            element={<ColorDetails />}
          />
          <Route exact="true" path="/colors" element={<ColorList />} />
          <Route path="/*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Colors;
