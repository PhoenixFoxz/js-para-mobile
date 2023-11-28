const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => {
         
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
            return response.json(); 
        })
        .then(data => {
            
            exibirDadosNoHTML(data);
        })
        .catch(error => {
            console.error('Erro:', error);
    });

function exibirDadosNoHTML(data) {
    const listaDados = document.getElementById('lista-dados');

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${item.name} - E-mail: ${item.email} - Website: ${item.website}`;
        listaDados.appendChild(li);
    });
}