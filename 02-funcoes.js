// 02-funcoes.js

/* Formas Tradicionais */

// Sintaxe anônima associada à variável/constante
// Obs.: Cuidado com a ordem, já que nesta sintaxe a função PRIMEIRO precisa ser declarada para somente DEPOIS ser chamada/executada.

const exemplo01 = function(){
    console.log("Função anônima!");
};

exemplo01();

// Sintaxe declarada/nomeada
// Obs.: Nesta sintaxe, voc~e pode chamar a função antes ou depois de declará-la. Portanto, a ordem não importa.
function exemplo02(){
    console.log("Função nomeada!");
};

exemplo02();

// Correção
/* Exercício
1) Crie uma função (qualquer sintaxe) que receba dois valores numéricos, calcule a diferença entre eles e retorne o resultado.
*/
// function exercicio01(valor1, valor2){
//     //1° Versão: Variável de escopo LOCAL
//     // let resultado = valor1 - valor2;
//     // return resultado;

//     //2° Versão
//     return valor1 - valor2;
// }

const exercicio01 = (valor1, valor2) =>  Math.abs(valor1 - valor2);
/*
2) Chame esta função duas vezes passando valores diferentes e guardando-os em variáveis de escopo global.
*/
let resultado1 = exercicio01(10, 5);
let resultado2 = exercicio01(130, 66);
let resultado3 = exercicio01(66, 130);

/*
3) Mostre os valores processados pela função no terminal.
*/
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
// Garantindo que o resultado seja absoluto (positivo)
// console.log(Math.abs(resultado3));

// Meu exercício
// function exercicio01(){
//     var resultado = valor1 - valor2;
//     return resultado;
// }

// console.log(exercicio01(valor1 = 100, valor2 = 30));

// console.log(exercicio01(valor1 = 1000, valor2 = 300));

// Sintaxe Arrow Function
const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá "+ cliente);
// };

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
// const saudacao = cliente => {
//     console.log("Olá "+ cliente);
// };

// Omitir as { } (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá "+ cliente);

saudacao("Fulano");
saudacao("Beltrano");

// Arrow Function padrão com retorno EXPLÍCITO
const calculaMetadeOriginal = (valor) => {
    return valor / 2;
};

// Arrow Function com retorno IMPLÍCITO
const calculaMetade = valor => valor / 2;

let resultadoA = calculaMetade(100);
let resultadoB = calculaMetade(666);

console.log(resultadoA);
console.log(resultadoB);

console.log("----------------");

/* 
Exercícios 

1) Monte uma Arrow function que receba um nome de uma pessoa e converta este nome para letras maiúsculas.

2) Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados.

*/

const maiuscula = nome => nome.toUpperCase();


let nome1 = maiuscula("felipe");
let nome2 = maiuscula("barbosa");
let nome3 = maiuscula("moura");

console.log(nome1);
console.log(nome2);
console.log(nome3);