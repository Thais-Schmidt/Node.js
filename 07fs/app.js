//Criando arquivo

const fs = require('fs');

// const content = `Criando um arquivo com File System`;

// fs.writeFile('C:/node/arquivo.txt', content, (err) => {

//     if (err) throw err;
//     console.log('Arquivo criado com sucesso');

// })

//Lendo conteudo do arquivo

// fs.readFile('C:/node/arquivo.txt', 'utf8', (err,data) => {

//     if(err) throw err; 
//     console.log(data);

// })

//renomear arquivo

const name = `C:/node/arquivo.txt`;
const rName = `C:/node/node.txt`;

// fs.rename(name, rName, (err) => {

//     if(err) throw err;
//     console.log(`Arquivo renomeado!`);

// })


//excluindo arquivo

fs.unlink(rName, (err) => {
    if(err) throw err;
    console.log(`Arquivo removido!`);
});
