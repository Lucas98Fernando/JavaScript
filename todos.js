// Referenciando os elementos do HTML, para serem manipulados no JS
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Convertendo os dados armazenanados localmente em um array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Função para renderizar os elementos da lista na tela
function renderTodos() {
    // Remover tudo o que está na lista do HTML
    listElement.innerHTML = '';

    // for específico para arrays
    for (todo of todos) {
        // Criando os elementos 'li'
        var todoElement = document.createElement('li');

        // Aqui é onde o texto informado será atribuído
        var todoText = document.createTextNode(todo);
        
        // Criando os elementos 'a'
        var linkElement = document.createElement('a');

        // Com o método 'indexOf', é possível passar um valor do array e retornar em qual posição ele se encontra 
        var pos = todos.indexOf(todo);

        // Ao acionar o clique do botão 'excluir', será chamada a função correspondente
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        
        // Adionando um 'href' ao 'excluir'
        linkElement.setAttribute('href', '#');
        
        // Texto do elemento que será utilzado para realizar a exlusão de elementos da lista
        var linkText = document.createTextNode('Excluir');

        // Adicionando o texto 'excluir', dentro do elemento 'a'
        linkElement.appendChild(linkText);

        // Adicionando o texto dentro do elemento, o texto é filho do elemento 
        todoElement.appendChild(todoText);

        // Adicionando o 'excluir' junto aos elementos da lista
        todoElement.appendChild(linkElement);

        // Adicionando os elementos dentro da lista, agora o elemento é filho da lista
        listElement.appendChild(todoElement);
    }
}

renderTodos();

// Função para pegar o que for digitado no input
function addTodo() {
    var todoText = inputElement.value;

    // O push é uma função do JS para adicionar um novo elemento dentro do array
    todos.push(todoText);

    // Limpar o que foi escrito, para o input ficar livre, para nova inserção
    inputElement.value = '';

    // Chamada da função para renderizar a lista novamente na tela
    renderTodos();
    saveToStorage();
}

// Método para adicionar um novo item dentro da lista, através do click no botão adicionar
buttonElement.onclick = addTodo;

// Função para remover um elemento do array, para isso, é necessário saber qual é a posição do elemento que será excluído
function deleteTodo(pos) {
    // O 'splice' é um método do JS que remove uma quantidade de itens de um array, baseado na posição que for passada
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();        
}

// Função para salvar os dados localmente, gravando chave e conteúdo
function saveToStorage() {
    // O 'localStorage', é uma variável global do JS para acessar o dados locais, não grava vetores, nem objetos
    // A função JS 'setItem', configura um valor para o storage
    // O comando 'JSON.stringfy', será responsável por converter o vetor em uma string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}