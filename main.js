
const form = document.getElementById('formulario');
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('numero-celular');

    if (inputNumero.value.length > 11) {
        alert('Número de celular inválido. Por favor, digite no máximo 11 caracteres.');
        return;
}

    const linha = criarLinha(inputNome.value, inputNumero.value);
    corpoTabela.appendChild(linha);

    inputNome.value = '';
    inputNumero.value = '';
});

function criarLinha(nome, numero) {
    const linha = document.createElement('tr');
    const celulaNome = document.createElement('td');
    const celulaNumero = document.createElement('td');

    celulaNome.textContent = nome;
    celulaNumero.textContent = numero;

    linha.appendChild(celulaNome);
    linha.appendChild(celulaNumero);

    return linha;
}
