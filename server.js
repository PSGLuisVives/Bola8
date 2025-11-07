const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Lista de respuestas de Magic 8 Ball
const responses = [
  "Si",
  "No",
  "Pregunta más tarde, no lo tengo claro",
  "Definitivamente",
  "No pinta bien la cosa",
  "Si, a su debido tiempo",
  "Absolutamente",
  "No cuentes con ello",
  "Si, pero no te hagas ilusiones",
  "Muy poco probable",
  "Es seguro",
  "Mis fuentes dicen que no",
  "Definitivamente SI",
  "Puedes confiar en ello",
  "Ni de coña!",
  "Ni en otro universo es posible",
  "Concéntrate y vuelve a preguntar"
];

// Acepta cualquier método y ruta
app.all('*', (req, res) => {
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  res.json({ answer: randomResponse });
});

app.listen(PORT, () => {
  console.log(`Bola8API running on http://localhost:${PORT}`);
});