import React from 'react';
import { useNavigate } from 'react-router';

const Search = ({setCharacter, character}) => {

    const navigate = useNavigate(); 
    const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:5000'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = e.target.children[0].value;
        const fetchData = async () => {
            await fetch(`${apiUrl}/api/characters/${value}`)
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