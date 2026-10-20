const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Aquí agregaremos los endpoints del taller.

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});