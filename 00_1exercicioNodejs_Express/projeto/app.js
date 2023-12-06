//importando Express

const express = require('express');

//Variavel para ter acesso as funcionalidades do express

const app= express();

app.use(express.static(`${__dirname}/projeto`));

app.get(`/`, function(req, res){
    res.sendFile(`${__dirname}/projeto/html/home.html`)
})

app.listen(1000,() => {
    console.log(`Servidor rodando na porta 1000`);
})

