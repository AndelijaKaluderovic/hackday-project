import React from 'react';
// import { useParams } from 'react-router-dom';

const Character = ({ character }) => {
  console.log(character);
    // const { name } = useParams();
  return (
    <div className="results">
   <p>Helloooo {character[0]?.name}</p>
    </div>
  );
}

export default Character;