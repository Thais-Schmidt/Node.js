class Cliente{

    constructor(body){
        this.id = body.id; //estamos informando o id para gerarmos o id ja que nao estamos trabalhando com o banco de dados
        this.nome = body.nome;
        this.email = body.email;
        this.senha = body.senha;
    }
}

module.exports= Cliente ;