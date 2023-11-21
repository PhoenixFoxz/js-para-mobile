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
function exercicio01(valor1, valor2){
    //1° Versão: Variável de escopo LOCAL
    // let resultado = valor1 - valor2;
    // return resultado;

    //2° Versão
    return valor1 - valor2;
}

/*
2) Chame esta função duas vezes passando valores diferentes e guardando-os em variáveis de escopo global.
*/
let resultado1 = exercicio01(10, 5);
let resultado2 = exercicio01(120, 66)
/*
3) Mostre os valores processados pela função no terminal.
*/
console.log(resultado1);
console.log(resultado2);

// Meu exercício
// function exercicio01(){
//     var resultado = valor1 - valor2;
//     return resultado;
// }

// console.log(exercicio01(valor1 = 100, valor2 = 30));

// console.log(exercicio01(valor1 = 1000, valor2 = 300));