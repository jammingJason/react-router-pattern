import React from 'react';
import { v4 as uuid } from 'uuid';
import { useParams, useSearchParams } from 'react-router-dom';
const DogDetails = (dogs) => {
  // let { state } = useSearchParams();
  // console.log(state);
  let { name } = useParams();
  let dogIndex;
  dogs.dogs.map((dog, idx) => {
    if ((dog.name = name)) {
      dogIndex = idx;
    } else {
    }
  });
  return (
    <>
      {console.log(name)}
      <div>Name: {dogs.dogs[dogIndex].name}</div>
      <div>Age : {dogs.dogs[dogIndex].age}</div>
      <div>
        {dogs.dogs[dogIndex].facts.map((fact) => (
          <div>{fact}</div>
        ))}
      </div>
    </>
  );
};

export default DogDetails;
