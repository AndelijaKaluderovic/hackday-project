import React from 'react';

const Characters = ({ allCharacters }) => {
  return (
    <div className="home">
              {allCharacters.map((char, i) => {
          return <a className="home__link" href= {char.urls[1].url} key={i} target= "_blank" rel="noreferrer"><img src={`${char.thumbnail.path}/standard_amazing.${char.thumbnail.extension}`} alt={char.events.name}></img></a>
        })
        }
    </div>
  );
}

export default Characters;