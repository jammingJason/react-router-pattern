import React from 'react';
import { Link, redirect } from 'react-router-dom';

const ColorList = () => {
  //   localStorage.setItem(
  //     'colors',
  //     JSON.stringify(['Red', 'Yellow', 'Green', 'Blue'])
  //   );
  const colors = JSON.parse(localStorage.getItem('colors'));

  const newColor = () => {
    window.location = '/colors/new';
  };

  return (
    <>
      {colors.map((color, idx) => (
        <Link key={idx + '-link'} to={color}>
          <h3 key={idx} style={{ color: color }}>
            {color}
          </h3>
        </Link>
      ))}
      <button type="button" className="btn btn-success" onClick={newColor}>
        Create New Color
      </button>
    </>
  );
};

export default ColorList;
