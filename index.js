const express = require('express');

const app = express();

app.use(express.json());

const reservas = require('./src/reservas2');

app.use('/reservas', reservas);

app.get('/', (req, res) => {
  res.send('Sistema de Reserva de Espacios Académicos');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});