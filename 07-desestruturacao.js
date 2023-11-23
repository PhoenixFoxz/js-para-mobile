// 07-desestruturacao.js

/* Destructuring ou Desestruturação
Extrair os dados de arrays e objetos para variáveis/constantes individuais
*/

// Destructuring em arrays
const alunas = ["Tanaka", "Zimbo", "Melissa"];
const [tanaka, zimbo, melissa] = alunas;

// const tanaka = alunas[0];
// const zimbo = alunas[1];
// const melissa = alunas[2];

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
const [penha, tatuape, , smp] = unidades;

console.log("-----------");

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log("-----------");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("-----------");


