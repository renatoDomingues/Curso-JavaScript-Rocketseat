
//AJAX =>uma requizição asincrona que realiza no backend como recuperar informções no servidor como o api do GitHub:
//"XMLHttpRequest()" =>vai dar o acesso a funcionalidade do AJAX:
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/RenatoDomingues');
xhr.send(null);

xhr.onreadystatechange = function(){
    //"4" =>variavel que significa que volta pra gente:
    if(xhr.readyState ===4){
        console.log(JSON.parse(xhr.responseText));
    }
};
