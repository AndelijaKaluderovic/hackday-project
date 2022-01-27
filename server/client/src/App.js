/* eslint-disable */
import './styles/App.css';
import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Characters from './components/Characters';
import Character from './components/Character';

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState([]);

  const apiUrl = process.env.API_URL || 'http://localhost:5000'

  const fetchData = async () => {
    await fetch(`${apiUrl}/api/characters`)
      .then(res => res.json())
      .then(res => setAllCharacters(res.data.results))
  }
  useEffect(() => {
    fetchData()
    return () => {
    }
  }, [])
  return (
    <div className="app">
      <Header />
      <Search character={character} setCharacter={setCharacter} />
      <Routes>
        <Route path="/" element={<Characters allCharacters={allCharacters} />} />
        <Route path="/results" element={<Character character={character} />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
