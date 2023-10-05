// console.log('----------- Node.js - Interpolaçao de strings ----------');

// const nome = `Thata`;
// const sobrenome = `Schmidt`;

// console.log(nome+ ` ` +sobrenome);
// console.log(`${nome} ${sobrenome}`);

const funcoes = require(`./funcoes`);

let a = 10, b= 20, c=3, d=5;

let resSoma = funcoes.soma(b,d);
let resSub = funcoes.subtracao(b,a);

console.log(`A soma dos numeros ${b} e ${d} e igual a ${resSoma}.`);
console.log(`A a subtraçao dos numeros ${b} e ${a} e igual a ${resSub}.`);

console.log('----------- ex1 ----------')

let resMulti = funcoes.multi(c,d);
console.log(resMulti);

console.log('----------- ex2 ----------')

let resDivi = funcoes.divi(b,a);
console.log(resDivi);

console.log('----------- ex3 ----------')

let resParOuImpar = funcoes.parImpar(d);
console.log(resParOuImpar);