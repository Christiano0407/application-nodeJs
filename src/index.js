//** ===== SERVER ============================ First Application With Node Js && Vanilla Javascript ============================== Front-end && Backend ============================== == */
//** === Express === (Type: module) */
//const express =  require(`express`);
import express from 'express';
//**! App === */
const app = express();
//**! PORT === */
const port = process.env.port || 3000;

//**! Routing === */
app.get(`/`, (req, res) => {
  res.send(`Hello World!!`);
});

//**! Listen === */
app.listen(port, () => {
  console.log(`Server is running in Port: http://localhost:${port}`);
});
