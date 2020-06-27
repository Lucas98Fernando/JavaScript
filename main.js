// REQUISIÇÕES COM AJAX

// 1ª Maneira - XMLHttpRequest

/*
// Requisições com o AJAX, serve para recuperar informações do servidor, sem precisar recarregar a página
// A classe 'XMLHttpRequest', é utilizada para ter acesso a funcionalidade AJAX
var xhr = new XMLHttpRequest();

// Buncando informações de uma determinada URL, através do AJAX
xhr.open('GET', 'https://api.github.com/users/Lucas98Fernando');
xhr.send('null');

// Função para que o AJAX seja carregado antes de toda a página
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // Convertendo o resultado da requisição que vem em formato de JSON, em um objeto ou vetor
        console.log(JSON.parse(xhr.responseText));
    }
}

// OU

// 2ª Maneira - Promise

// O 'Promise' é uma classe que representa um valor que pode estar disponível agora, no futuro ou nunca.
// Não interfere no funcionamento geral do código
var minhaPromisse = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Lucas98Fernando');
        xhr.send('null');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromisse()
    // O '.then', será executado quando for chamado o 'resolve' na promise, representa a resposta de sucesso da requisição
    .then(function(response) {
        console.log(response);
    })
    // O '.catch', será executado quando for chamado o 'reject' na promise, representa a resposta de erro da requisição
    .catch(function(error) {
        console.warn(error);
    });
*/

// OU

// 3ª Maneira - Axios

// AXIOS
// Utilizando a biblioteca 'axios' para as requisições assícronas
// Funciona como um encapsulamento do 'XMLHttpRequest'
axios.get('https://api.github.com/users/Lucas98Fernando')
    // O '.then', será executado quando for chamado o 'resolve' na promise, representa a resposta de sucesso da requisição
    .then(function(response) {
        console.log(response);
    })
    // O '.catch', será executado quando for chamado o 'reject' na promise, representa a resposta de erro da requisição
    .catch(function(error) {
        console.warn(error);
    });