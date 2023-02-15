import React from 'react';
import { redirect } from 'react-router-dom';
import ColorDetails from './ColorDetails';

const ColorNew = () => {
  const insertNewColor = () => {
    const color = document.querySelector('#color');
    let colors = JSON.parse(localStorage.getItem('colors'));
    colors.unshift(color.value);
    localStorage.setItem('colors', JSON.stringify(colors));
    // redirect('/colors');
    window.location = '/colors';
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 text-end">New Color : </div>
          <div className="col-6 text-start">
            <input type="text" id="color" />
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={insertNewColor}
            >
              Create Color
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorNew;
