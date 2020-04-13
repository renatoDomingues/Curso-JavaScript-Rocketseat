
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderRepositories(repositories){
    listElement.innerHTML = " ";
    for(repo of repositories){
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);

        inputElement.value = " ";
    }
}

function renderLoading(){
    listElement.innerHTML = " ";
    var textElement = document.createTextNode('Carregando... ...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);

    inputElement.value = " ";
}

function renderError(){
    listElement.innerHTML = " ";
    var textElement = document.createTextNode('Erro ao carregar!');
    var errorElement = document.createElement('li');

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);

    inputElement.value = " ";
}

function listRepositories(){
    var user = inputElement.value;
    if(!user) return
    renderLoading()
    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function(response){
            renderRepositories(response.data);
        })
        .catch(function(){
            renderError();
        })
}
