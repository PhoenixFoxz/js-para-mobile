// 01-var-let-const.js

var idade = 18; // ESCOPO GLOBAL
let mensagem; // ESCOPO GLOBAL

if( idade >= 18){
    // var mensagem = "É adulto!" ESCOPO GLOBA
    // mensagem = "É adulto!";
    // let mensagem = "É adulto!"; // ESCOPO BLOCO
} else {
    // var mensagem = "É menor" ESCOPO GLOBAL
    // mensagem = "É menor"; 
    // let mensagem = "É menor"; // ESCOCO BLOCO
}

console.log(idade);

// Dará erro pois mensagem só existe dentro do bloco if/else
// console.log(mensagem);

const meuNome = "Felipe";
console.log(meuNome);

// Reatribuição NÃO É possível em constantes
// meuNome = "Felipe Moura Martins";
// console.log(meuNome);

// Constantes sempre são declaradas com algum valor
// E este valor NÃO PODE SER modificado 
const escola = "SENAC";