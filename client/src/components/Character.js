import React from 'react';
// import { useParams } from 'react-router-dom';

const Character = ({ character }) => {
  console.log(character);
    // const { name } = useParams();
    // {character[0]?.name}
  return (
    <div className="character">
      <div className="character__image">
        <img src={`${character[0]?.thumbnail.path}/standard_amazing.${character[0]?.thumbnail.extension}`} alt={character[0]?.name}></img>
        </div>
        <h1 className="character__name">{character[0]?.name}</h1>
        <p className="character__description">{character[0]?.comics.description}</p>
        <div className="character__comics">
        <h2 className="character__series__heading">Comics</h2>
          <ul className="character__comic__list">
            {character[0]?.comics.items.map((title, i) => {
            return <li key={i}>{title.name}</li>})}
          </ul>
        </div>
        <div className="character__series">
          <h2 className="character__series__heading">Series</h2>
        <ul className="character__movies__list">
        {character[0]?.series.items.map((title, i) => {
            return <li key={i}>{title.name}</li>})}
          </ul>
        </div>
        <div className="character__stories">
        <h2 className="character__series__heading">Stories</h2>
        <ul className="character__movies__list">
        {character[0]?.stories.items.map((title, i) => {
            return <li key={i}>{title.name}</li>})}
          </ul>
        </div>
    </div>

  );
}

export default Character;