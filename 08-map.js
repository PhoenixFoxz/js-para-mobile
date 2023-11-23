// 08-map.js
import cursos from "./modulos/cursos.js";
/* map (mapear, mapeia - transformar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles através de uma função (callback), gerando um novo array.
*/ 

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50, 333];
const numerosDobrados = numeros.map( 
    numero => numero * 2
);

console.log(numerosDobrados);

console.log("-----------");

console.log(cursos);

// Exemplo 2: gerar um novo array apenas com os nomes dos cursos
const titulos = cursos.map( curso => curso.titulo );

console.log(titulos);

/* Exercício
Use o map para gerar um novo array APENAS com os preços calculados com um desconto de 10%. 
*/

const desconto = cursos.map( curso => (curso.preco - (curso.preco * 10) / 100));
const preco = cursos.map ( curso => curso.preco );
const categoria = cursos.map ( curso => curso.categoria );


console.log(desconto);

for( const prop in cursos ) {
    console.log(`Curso: ${titulos[prop]}`)
    console.log(`Categoria: ${categoria[prop]}`)
    console.log(`Preço Original: ${preco[prop]}`)
    console.log(`Preço Com Desconto: ${desconto[prop]}`)
    console.log("-----------");
}

