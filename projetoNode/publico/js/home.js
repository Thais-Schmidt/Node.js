// alert(`Pagina Home`);

//Inicio - transiçao do nav para branco ao descer a pagina
//Funcionando junto ao css - linhas 39-46

const menu = document.querySelector('nav');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);

//Fim

// Funçao do botao que leva para a pagina de Cadastro

function caminhoCadastro() {
    window.location.href = "/cadastro";
}

//Funçao do botao que leva para a pagina de Contato

function caminhoContato() {
    window.location.href = "/contato";
}

//Fim