//input

const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});
readLine.question('Qual sua linguagem de programaçao favorita?', (language) => {
    console.log(language);
    readLine.close();
});