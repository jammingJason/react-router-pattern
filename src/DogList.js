import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './DogList.css';

const DogList = (dogs) => {
  return (
    <div className="container">
      <div className="row">
        {dogs.dogs.map((dog, idx) => (
          <div key={idx + '-div'} className="col border m-1 shadow">
            <Link to={dog.name} params={{ dog: dog }}>
              <h3 key={idx + '-h3'}>{dog.name}</h3>
            </Link>
            <hr />
            <p key={idx + '-p'}>Age : {dog.age}</p>
            <div key={idx + '-d'} className="text-start">
              <ul key={idx + '-ul'}>
                {dog.facts.map((fact, i) => (
                  <li key={uuid()}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
