// 06-operador-rest.js

/* Conceito
Usand o ... com "rest operator" 
podemos mesclar uma lista de parâmetros/argumentos para uma função*/

const cientistas = ["Tesla", "Einstein", "Newton", "Darwin"];

const artistas = ["John", "Ozzy", "David", "Roger", "Floor", "Neil"];

                    // rest
const classificar = (...parametros) => parametros.sort(); 


// Chamada da função
console.log(classificar(...cientistas)); // spread
console.log(classificar(...artistas)); // spread