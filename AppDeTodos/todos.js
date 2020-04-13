
//alert('Funcionou!');

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button'); 

//Voltar para o array de novo utiliza "JSON.parse( )":
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/*
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];
*/

function renderTodos(){
    //Quando fazer renderização, não copiar as anteriores:
    listElement.innerHTML = ' ';
    for(todo of todos){
        //console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Para excluir:
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //"indexOf" =>procurar:
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        //Colocar um texto:
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo(){
    //Pegar o valor do "inputElement":
    var todoText = inputElement.value;
    //Função do array pra adicionar um novo valor no seu final:
    todos.push(todoText);
    //Depois realizado processo, apagar texto no input:
    inputElement.value = ' ';
    //Chamar o "Todos" novamente para fazer sua renderização:
    renderTodos();
    //Chamar a função:
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    //Apartir da posição "pos", remove "1" o proximo item: 
    todos.splice(pos, 1);
    //Chamar as funções:
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //"localStorage" é global para armazenar dados:
    //'list_todos' =>poderiamos dar o nome que quisessemos:
    //converter o "todos" para "localStorage" =>usar "JSON.stringify()":
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
