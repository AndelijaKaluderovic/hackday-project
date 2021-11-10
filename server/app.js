const express = require('express')
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
