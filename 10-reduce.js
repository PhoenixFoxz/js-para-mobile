// 10-reduce.js

import cursos from "./modulos/cursos.js";

/* reduce (reduzir, redução)
Passa por elementos de um array (usando uma função callback como parâmetros, e um parâmetro com valor inicial) 
e retorna um único valor/resultado. Pode ser útil para operações matemáticas que geram um único resultado.
*/

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(valores);
console.log(total);

// Sem reduce com for
let acumuladora1 = 0;

for( let i = 0; i < valores.length; i++ ){
    // acumuladora1 = acumuladora1 + valores[i];
    acumuladora1 += valores[i];
}

console.log(acumuladora1);

// Sem reduce com for/of
let acumuladora2 = 0;
for( let valor of valores ){
    // acumuladora2 = acumuladora2 + valor;
    acumuladora2 += valor;
}
console.log(acumuladora2);

console.log("-----------");

const totalCurso = cursos.reduce((acumulador, valor) => {
    return acumulador += valor.preco
}, 0);

console.log(totalCurso);

// Desafio 

const totalFrontBack = cursos
.filter( curso => curso.categoria === "Front-End" || curso.categoria === "Back-End" )
.reduce( (acumulador, valor) => acumulador + valor.preco, 0)

console.log(totalFrontBack);