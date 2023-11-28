// 12-async-await.js

/* Comunicação assíncrona (AJAX) para carregamento de dados usando fetch e a sintaxe asynv/await através de função (obrigatório o uso de função) */

const apiUrl = `https://jsonplaceholder.typicode.com/photos/2500`

async function acessaAPI(){
    try {
        const resposta = await fetch(apiUrl);

        if(!resposta.ok){
            throw new Error(
                `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
            )
        }

        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.error("Erro: "+error.message);
    }

}

acessaAPI();