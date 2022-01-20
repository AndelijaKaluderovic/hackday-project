import React from 'react';
import { useNavigate } from 'react-router';

const Search = ({setCharacter, character}) => {

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = e.target.children[0].value;
        const fetchData = async () => {
            await fetch(`http://localhost:5000/api/characters/${value}`)
            .then(res => res.json())
            .then(res => {
                const results = res.data.results;
                return setCharacter(results);
            }
            )}
            fetchData();
            navigate('/results')
    }
    return (
        <div className="search" >
            <form className="search__form" type="submit" onSubmit={handleSubmit}>
            <input className="search__input" type="text" placeholder="Find Your Hero... " />
            </form>
        </div>
    )
}

export default Search;