const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint 1: health
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando correctamente'
  });
});

// Endpoint 2: info
app.get('/api/info', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando',
    integrantes: [
      {
        nombre: 'Marcos Vasquez',
        carnet: '00114825',
        ciudad: 'La libertad',
        carrera: 'Ingeniería en Sistemas',
        proyectos: 5
      },
      {
        nombre: 'Ulises Martinez',
        carnet: ' 00191323',
        ciudad: 'San Salvador',
        carrera: 'Ingeniería en Sistemas',
        proyectos: 3
      }
    ]
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});