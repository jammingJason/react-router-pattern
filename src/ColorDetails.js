import React from 'react';
import { useParams } from 'react-router-dom';
import './ColorDetails.css';

const ColorDetails = () => {
  let { color } = useParams();
  let containColor = false;
  const colors = JSON.parse(localStorage.getItem('colors'));
  colors.map((c) => {
    if (c === color) {
      containColor = true;
    }
  });
  if (!containColor && color !== 'new') {
    window.location = '/colors';
  }
  const goHome = () => {
    window.location = '/colors';
  };

  const createBoxes = () => {
    const divColor = document.querySelector('#colorDiv');
    const box = document.createElement('div');
    box.className = 'box';
    box.style.background = color;
    const top = Math.floor(Math.random() * window.innerHeight);
    const left = Math.floor(Math.random() * window.innerWidth);
    box.style.left = left + 'px';
    box.style.top = top + 'px';
    divColor.append(box);
    // alert(box);
    // box.style((position = 'absolute'));
  };
  return (
    <>
      <div style={{ background: color }} id="colorDiv">
        <button type="button" className="btn btn-success m-2" onClick={goHome}>
          Return to Colors
        </button>
      </div>
      <button type="button" className="btn btn-primary" onClick={createBoxes}>
        Create a Spot
      </button>
    </>
  );
};

export default ColorDetails;
