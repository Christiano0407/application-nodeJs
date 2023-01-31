//** ===== SERVER ============================ First Application With Node Js && Vanilla Javascript ============================== Front-end && Backend ============================== == */
//** === Express === (Type: module) */
//const express =  require(`express`);
//import ejs from `ejs`;
import express from 'express';
//** === Add Routing Absolute */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

//** ===  Call Router === */
import router from './routes/index.js';

//**! App === */
const app = express();
//**! PORT === */
const port = process.env.port || 3000;

//**? === EJS / View Engine & Extend HTML & Rout View */
const __dirname = dirname(fileURLToPath(import.meta.url));
//const __dirname = path.dirname(new URL(import.meta.url).pathname);
//console.log(join(__dirname, `views`));

app.set(`views`, join(__dirname, `views`));
app.set(`view engine`, `ejs`);

//**! Routing === > Router */
/* app.get(`/`, (req, res) => {
  res.send(`Hello World!!`);
}); */
app.use(router);

//**! Listen === */
app.listen(port, () => {
  console.log(`Server is running in Port: http://localhost:${port}`);
});
