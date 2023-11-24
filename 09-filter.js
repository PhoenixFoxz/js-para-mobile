// 09-filter.js

/* filter (filtrar)
Passa por elementos de um array (usando uma função callback) e retorna valores de acordo com uma ou mais condições gerado um novo array.  
*/

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;

console.log(vendas);

// Gerando um array com os valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter( (venda) => {
    return venda > meta
} );

console.log(vendasAcimaDaMeta);

console.log("-----------");

// Exemplo 2
const alunos = [
    "Nicolas", "Eliel", "André", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "Mônica", "Marcelo"
];

console.log(alunos);

const resultados = alunos.filter( aluno => {
    // return aluno.startsWith("M") || aluno.startsWith("m")
    return aluno.startsWith("M") && aluno.endsWith("o")
}  );

console.log(resultados);