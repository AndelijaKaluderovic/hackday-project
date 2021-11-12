import React from 'react';
import Welcome from './Welcome';

const Characters = ({ allCharacters }) => {
  return (
    <div>
      <Welcome />
      <div className="home">
        {allCharacters.map((char, i) => {
          if (char.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
            return <a className="home__link" href={char.urls[1].url} key={i} target="_blank" rel="noreferrer">
              <img className="home__image" src={`${char.thumbnail.path}/standard_amazing.${char.thumbnail.extension}`} alt={char.events.name}></img>
            </a>
          }
          return null
        })
        }
      </div>
    </div>
  );
}

export default Characters;
