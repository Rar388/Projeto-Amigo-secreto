let listaDeAmigos = [];

function adicionarAmigos() {
    let nomeDigitado = document.getElementById('amigo');
    let nome = nomeDigitado.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome antes de adicionar.');
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    nomeDigitado.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
