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

