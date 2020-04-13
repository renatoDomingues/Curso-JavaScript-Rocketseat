
//"axios" =>já entende que é um JSON
axios.get('https://api.github.com/users/RenatoDomingues')
   .then(function(response){
       console.log(response);
       //console.log(response.data.avatar_url);
   })
   .catch(function(error){
       console.log(error);
   });
