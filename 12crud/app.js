// import express from 'express';
// import { engine } from 'express-handlebars';

const express = require('express');
const { engine } = require('express-handlebars');

const homeController = require('./controller/homeController');
const aboutController = require('./controller/aboutController');
const contatoController = require('./controller/contatoController');

const app = express();
const port = 8080;

//BodyParser
const bodyParser = require('body-parser');

//Configurando o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', engine({ defaultLayout: ('main') }));

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/publico`));

//Rotas

app.get('/', homeController.home );

app.get('/about', aboutController.about );

app.get('/contato', contatoController.contato );

app.post('/cadastroContato', contatoController.cadastroContato );

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});

