
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderRepositories(repositories){
    for(repo of repositories){
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);

        inputElement.value = " ";
    }
}
function listRepositories(){
    var user = inputElement.value;
    if(!user) return 
        axios.get('https://api.github.com/users/'+user+'/repos')
            .then(function(response){
                renderRepositories(response.data);
            })
}
