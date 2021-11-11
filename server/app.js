import express from 'express';
import nodeFetch from 'node-fetch';
import cors from 'cors';
const app = express();
const port = 5000;

// app.use(cors);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    next();
  });

const apikey = '5f6bb8134b17bcefebf2a23eca2c20f6';
const hash = '55675ecfb9c7d87dc743637721994033';
// const charactersUrl = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;
// const oneCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${apikey}&hash=${hash}`;

const fetchData = async (path) => {
    const response = await nodeFetch(path);
    const data = await response.json();
    console.log(data);
    return data;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/characters', async (req, res) => {
    const characters = await fetchData(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`)
    res.send(characters);
});

app.get('/api/characters/:characterName', async (req, res) => {
    const { characterName } = req.params;
    const oneCharacter = await fetchData(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&ts=1&apikey=${apikey}&hash=${hash}`)
    res.send(oneCharacter);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
