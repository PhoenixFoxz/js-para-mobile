// 09-filter.js

import cursos from "./modulos/cursos.js";

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

// Filtrando alunos que começam com "M" e terminam com "o"
// Obs.: faz diferença usar maiúsculas ou minúsculas.
const resultados = alunos.filter( aluno => {
    // return aluno.startsWith("M") || aluno.startsWith("m")
    return aluno.startsWith("M") && aluno.endsWith("o")
}  );

console.log(resultados);

console.log("-----------");

// Filtrando cursos
console.log(cursos);

// Filtrando por cursos da categoria Design

const cursosDesign = cursos.filter( curso => curso.categoria === "Design" );
console.log(cursosDesign);

// Filtrando por cursos que NÃO SÃO da categoria Design
const cursosMenosDesign = cursos.filter( curso => curso.categoria !== "Design" );

console.log(cursosMenosDesign);

const cursosFrontMobile = cursos.filter( curso => curso.preco > 600 && curso.categoria === "Front-End" || curso.categoria === "Mobile" );

console.log(cursosFrontMobile);

const cursosMobile = cursos.filter( curso => curso.categoria === "Mobile" ).map( curso => curso.titulo );

// Desafio: gerar um novo array somente com os títulos dos cursos da categoria Mobile

console.log(cursosMobile);

// Sem encadeamento 

const desafio2 = cursos.filter(curso => curso.categoria == "Mobile");
console.log(desafio2);

const desafio2Titulos = desafio2.map(curso => curso.titulo);
console.log(desafio2Titulos);
