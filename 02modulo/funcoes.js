const soma = function (a,b) {
    return a+b;
};

const subtracao = function (a,b) {
    return a-b;
};

// -Uma função para multiplicação de 2 números passados por parâmetros;

const multi = function(c,d){
    return c * d;
}

// -Uma função para divisão de 2 números passados por parâmetros;

const divi = function(e,f){
    return e / f;
}

// -Uma função para verificar se um número passado por parâmetro é par ou ímpar;

const parImpar = function(g){
    if(g/2 == 0){
        return (`O numero ${g} e PAR.`)
    }else{
        return (`O numero ${g} e IMPAR.`)
    }
}

console.log('----------- exportando funcoes----------')

module.exports = {
    soma, subtracao, multi, divi, parImpar,
}