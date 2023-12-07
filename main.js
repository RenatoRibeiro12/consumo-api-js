async function obterDadosDaAPI() {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const dados = await resposta.json();
      

      const listaUsers = document.getElementById("usersList");
      
      dados.forEach((users) => {
        const listUser = document.createElement("li");
        
        listUser.textContent = users.username;
        console.log('usuários: ',users.username);
        listaUsers.appendChild(listUser);

      });
    } catch (erro) {
      console.error('Erro ao obter dados da API:', erro);
    }
  }
  
  obterDadosDaAPI();