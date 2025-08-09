let texto = document.querySelector('h1')
   texto.innerHTML = 'Bem Vindo ao Amigo Secreto!'
   let tag = document.querySelector('h2')
   tag.innerHTML = 'Digite o nome dos seus amigos';
let listaDeAmigos = [];


function adicionarAmigos() { 
  let input = document.querySelector('input'); 
  let amigo = input.value

  if (amigo == '') { 
    alert('Por favor, digite um nome antes de adicionar.'); 
  } else { 
    listaDeAmigos.push(amigo);
    listaAmigos();
    limparCampo();
  }
}

function listaAmigos() { 
   let ul = document.getElementById('listaAmigos'); 
   ul.innerHTML = '';
   let contador = 0;
 while (contador < listaDeAmigos.length) {
    let li = document.createElement('li');
    li.textContent = listaDeAmigos[contador];
    ul.appendChild(li);
    contador++;
  }
}


function sortearAmigo() { 
  let ul = document.getElementById('resultado');
  ul.innerHTML = ''; 

  if (listaDeAmigos.length == 0) { 
    alert('Por favor, insira nomes para sortear.'); 
    return; 
  }

  let gerarNomeAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let nomeAleatorio = listaDeAmigos[gerarNomeAleatorio]; 

  let li = document.createElement('li');
  li.textContent = `🥳🎉 O nome sorteado é: ${nomeAleatorio}`;
  ul.appendChild(li);
}

function limparCampo() { 
  let input = document.querySelector('input');
  input.value = '';
}