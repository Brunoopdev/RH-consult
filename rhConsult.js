//elementos add informacoes
const inputNome = document.querySelector('.inputNome');
const inputNumero = document.querySelector('.inputNumero');
const inputEmail = document.querySelector('.inputEmail');

const buttonEnvia = document.querySelector('.buttonEnvia'); 

//elementos pesquisa informacoes
const inputPesquisa = document.querySelector('.inputPesquisa');

const buttonPesquisa = document.querySelector('.buttonPesquisa');

//elemento retorno da pesquisa
const retornoNome = document.querySelector('.retornoNome');
const retornoNumero = document.querySelector('.retornoNumero');
const retornoEmail = document.querySelector('.retornoEmail');

//objeto que vai armazenar as pessoas inseridas
const pessoas = {};


function Pessoa(nome, numero, email){
    this.nome = nome;
    this.numero = numero;
    this.email = email;
}

buttonEnvia.addEventListener('click', () =>{
    const nome = inputNome.value.toUpperCase();
    pessoas[nome] = new Pessoa(inputNome.value, inputNumero.value, inputEmail.value);

    console.log(pessoas);

    inputNome.value = '';
    inputNumero.value = '';
    inputEmail.value = '';
})

buttonPesquisa.addEventListener('click', () =>{
    nomePesquisado = inputPesquisa.value.toUpperCase();

    if(nomePesquisado == undefined || nomePesquisado == null || nomePesquisado == ''){
        alert('Usuário não cadastrado');
    }else{
        retornoNome.textContent = `NOME: ${JSON.stringify(pessoas[nomePesquisado].nome)}`;
        retornoNumero.textContent = `NUMERO: ${JSON.stringify(pessoas[nomePesquisado].numero)}`;
        retornoEmail.textContent = `EMAIl: ${JSON.stringify(pessoas[nomePesquisado].email)}`;
    }

    
})

