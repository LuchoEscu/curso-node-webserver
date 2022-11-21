const hbs = require('hbs');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//Handleabars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'));

const nombreTitulo = () => {
  return {
    nombre: 'Luciano',
    titulo: 'Curso de node'
  }
}

app.get('/', (req, res) => res.render('home', nombreTitulo()));

app.get('/generic', (req, res) => {
  res.render('generic', nombreTitulo())
  // res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
  res.render('elements', nombreTitulo())
  // res.sendFile(__dirname + '/public/elements.html');
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo desde su ruta');
//   });
// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo desde su ruta');
//   });
app.listen(port, () =>{
    console.log(`Este ejemplo se esta ejecutando en http://localhost:${port}`);
})