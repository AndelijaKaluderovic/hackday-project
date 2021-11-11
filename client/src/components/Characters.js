import React from 'react';
import Welcome from './Welcome';

const Characters = ({ allCharacters }) => {
  return (
    <div>
      <Welcome />
      <div className="home">
        {allCharacters.map((char, i) => {
          return <a className="home__link" href={char.urls[1].url} key={i} target="_blank" rel="noreferrer">
            <img className="home__image" src={`${char.thumbnail.path}/standard_amazing.${char.thumbnail.extension}`} alt={char.events.name}></img>
          </a>
        })
        }
      </div>
    </div>
  );
}

export default Characters;