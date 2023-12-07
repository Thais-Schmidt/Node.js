const crud = require('../models/crud');
const filePath = './data/db.contatos.json'

const home = (req, res) => {
    // let pessoas = [
    //     { nome: `Thais`, idade: 22 },
    //     { nome: `Gio`, idade: 22 },
    //     { nome: `Valle`, idade: 20 },
    //     { nome: `Tiago`, idade: 19 },
    // ];

    let pessoas = crud.read(filePath);
    res.render('home', { expressHndBrs: true, dados: pessoas });
}

module.exports = { home }; //se houver uma segunda funçao e so colocar virgula apos o home e acrescentar o nome da funçao