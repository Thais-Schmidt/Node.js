function validar(cpf){
    
    var soma;
    var resto;
    soma = 0;
    if (cpf == "00000000000") return false;

    for (i=1; i<=9; i++) {

        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);

    }
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }
    if (resto != parseInt(cpf.substring(9, 10))){
        return `O CPF ${cpf} e invalido`;
    } 

    soma = 0; //apos a primeira parte da funcao (validar o primeiro digito) estiver ok, nos zeramos a variavel >Soma<

    for (i = 1; i <= 10; i++){

        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i); 

    } 
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }
    if (resto != parseInt(cpf.substring(10, 11))){
        return `O CPF ${cpf} e invalido`;
    } else {
        return `O CPF ${cpf} e valido`;
    }
    
}

console.log('----------- exportando funcao----------')

module.exports = {
    validar,
}
