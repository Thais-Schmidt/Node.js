const express = require('express');
const app = express();
const crud = require('../models/crud');

const Cliente = require('../models/cadastro.models');
const bodyParser = require('body-parser');
const filePath = "./data/db.contatos.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const contato = (req, res) => {
    res.render('contato');
};

const cadastroContato = (req, res) => {
    let cliente = new Cliente(req.body);
    crud.read(filePath);
    cliente.id = crud.verificaId();
    crud.create(cliente, filePath);
    res.redirect('/');
};

module.exports = { contato, cadastroContato };
