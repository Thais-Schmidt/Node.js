//Definimos uma variável que, para facilitar o nosso desenvolvimento, deve ter o mesmo nome do módulo com o qual estamos trabalhando.

const http = require('http');

http.createServer(function (req, res) {
    res.write(`Aprendendo Node.js! AOBA  `);
    // res.end(`Hello World! Welcome to my website!`);
    res.end();
}).listen(8081);

// req (recebe)--> quando o servidor recebe uma informação;
// res (retorna)--> quando vamos responder, exibir algo, uma página html, um texto;
// Na última linha temos o ‘listen(8081)’, indicando a porta que nosso servidor está escutando. 

// Acessar no navegador com um dos seguintes endereços:

// localhost:8081 ou 127.0.0.1:8081

// Pressione ‘CTRL + C’ no terminal para finalizar o servidor e, em seguida, digite o comando novamente para iniciar o servidor.

// Retorne ao navegador e atualize a página, se tudo ocorrer como o esperado a página será atualizada com as novas informações.