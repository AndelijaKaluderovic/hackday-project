import React from 'react';
import { useNavigate } from 'react-router';

const Search = ({ setCharacter, character }) => {

    const navigate = useNavigate();
    const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://powerful-beyond-95375.herokuapp.com/'

    const handleSubmit = async (e) => {
        console.log(character)
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
        // const fetchData = async () => {
        //     if (process.env.NODE_ENV === 'production') {
        //         await fetch(`https://powerful-beyond-95375.herokuapp.com/api/characters/${value}`)
        //             .then(res => res.json())
        //             .then(res => {
        //                 const results = res.data.results;
        //                 return setCharacter(results);
        //             })
        //     } else if (process.env.NODE_ENV === 'development') {
        //         await fetch(`http://localhost:5000/api/characters/${value}`)
        //             .then(res => res.json())
        //             .then(res => {
        //                 const results = res.data.results;
        //                 return setCharacter(results);
        //             })
        //     }
        // }
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