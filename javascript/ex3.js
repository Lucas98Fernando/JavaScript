// 1ª Questão
/*
function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resove, reject) {
        if (idade > 18){
            resove();
        }
        else {
            reject();
        }
    });
}
   
checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
*/

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
    listElement.innerHTML = "";
    for (repo of repositories) {
        const liElement = document.createElement('li');
        const textElement = document.createTextNode(repo.name);
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
  }
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var loadingElement = document.createElement('li');
    var textElement = document.createTextNode('Carregando, aguarde...');
    loadingElement.style.color = "#008000"
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(loading) {
    listElement.innerHTML = "";
    var errorElement = document.createElement('li');
    var textElement = document.createTextNode('Não existe nenhum usuário com os dados informados!');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories() {
    var user = inputElement.value;
    if (!user) {
        return alert('O campo está vazio!');
    }
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
        })
        .catch(function () {
            renderError();
        });
}