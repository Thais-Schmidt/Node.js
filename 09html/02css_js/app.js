//Importar modulo Express

const express = require('express');

//criar variavel para ter acesso as funcionalidades do Express 
const app = express();

//espress.static serve para identificar um local no diretorio do projeto

app.use(express.static(`${__dirname}/publico`)) //dirname localiza o diretorio raiz do projeto

app.get(`/`, function (req, res) {
    res.sendFile(`${__dirname}/publico/html/index.html`)
})

app.use(function (req, res) {
    res.status(404).sendFile(`${__dirname}/publico/html/404.html`)
})

app.listen(7000,() => {
    console.log(`Servidor rodando na porta 7000`);
})

