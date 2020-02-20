const express = require('express');
const rotaPet = require('./routes/pet');

const app = express();

app.use(rotaPet);

app.listen(3000, () => {
    console.log('Carnaval');
});
