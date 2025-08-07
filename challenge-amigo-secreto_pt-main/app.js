let texto = document.querySelector('h1')
texto.innerHTML = 'Bem Vindo ao nosso Amigo Secreto!'
let tag = document.querySelector('h2')
tag.innerHTML = 'Digite o nome dos seus amigos abaixo';
let listaDeAmigos = [];

function adicionarAmigos() { 
  let input = document.querySelector('input'); 
  let amigo = input.value

  if (amigo === '') { 
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

  for (let nome of listaDeAmigos) { 
    let li = document.createElement('li');
    li.textContent = nome;
    ul.appendChild(li); 
  }
}
function limparCampo() { 
  let input = document.querySelector('input');
  input.value = '';
}



