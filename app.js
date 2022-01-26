import express from 'express';
import nodeFetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';


const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    next();
  });
dotenv.config();
const apikey = process.env.ACCESS_KEY;
const hash = process.env.ACCESS_HASH;

const fetchData = async (path) => {
    const response = await nodeFetch(path);
    const data = await response.text();
    console.log(data);
    return data;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'server/build')));



app.get('/api/characters', async (req, res) => {
  const characters = await fetchData(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`)
  res.send(characters);
});

app.get('/api/characters/:characterName', async (req, res) => {
  const { characterName } = req.params;
  const oneCharacter = await fetchData(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&ts=1&apikey=${apikey}&hash=${hash}`)
  res.send(oneCharacter);
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
