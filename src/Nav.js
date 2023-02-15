import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = (dogs) => {
  //   console.log(dogs);
  return (
    <div className="navDiv">
      <nav className="nav ">
        <NavLink key="abc" exact="true" to="/dogs">
          Home
        </NavLink>
        {dogs.dogs.map((dog, idx) => (
          <NavLink
            key={idx}
            exact="true"
            to={'/dogs/' + dog.name}
            state={{ dog: dog }}
          >
            {dog.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
