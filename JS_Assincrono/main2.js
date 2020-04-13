
var myPromise = function(){
    //"resolve"=>quando resultado for de sucesso,"reject"=>não sucesso:
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/RenatoDomingues');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState ===4){
                if(xhr.status ===200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//var resultado = myPromise();
//console.log(resultado);
myPromise()
   //Executado quando chamar o "resolve"
   .then(function(response){
       console.log(response);
   })
   //Vai ser invocado".catch" pelo o "reject" acima:
   .catch(function(error){
       console.warn(error);
   });
