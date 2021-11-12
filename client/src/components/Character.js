import React from 'react';

const Character = ({ character }) => {
  console.log(character);
  return (
    <div className="albhabet__characters" >

    {character.map((chars, i) => {
      if (chars.comics.available !== 0) {
      return <div className="character" key={i}>
      <div className="character__image">
        <img className="character__img" src={`${chars.thumbnail.path}/standard_amazing.${chars.thumbnail.extension}`} alt={chars.name}></img>
        </div>
        <h1 className="character__name">{chars.name}</h1>
        <p className="character__description">{chars.description}</p>
        <div className="character__comics">
        <h2 className="character__comics__heading">Comics</h2>
          <ul className="character__comics__list">
            {chars.comics.items.map((title, i) => {
            return <li className="character__comics__list__li" key={i}>{title.name}</li>})}
          </ul>
        </div>
        <div className="character__series">
          <h2 className="character__series__heading">Series</h2>
        <ul className="character__series__list">
        {chars.series.items.map((title, i) => {
            return <li className="character__series__list__li" key={i}>{title.name}</li>})}
          </ul>
        </div>
        <div className="character__stories">
        <h2 className="character__stories__heading">Stories</h2>
        <ul className="character__stories__list">
        {chars.stories.items.map((title, i) => {
            return <li className="character__stories__list__li" key={i}>{title.name}</li>})}
          </ul>
        </div>
    </div> }
    return null;
    })}
    
    </div>

  );
}

export default Character;
