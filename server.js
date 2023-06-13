const express = require('express');
const variationsRouter = require('./src/routes/variations');

const app = express();
const port = process.env.PORT || 3000;

app.use('/variations', variationsRouter);

app.use((req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Pokémon API listening at http://localhost:${port}`);
});
