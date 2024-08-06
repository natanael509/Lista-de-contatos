const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizarConteudo();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('numero-celular');

    const linha = `
    <tr>
        <td>${inputNome.value}</td>
        <td>${inputNumero.value}</td>
    </tr>
    `;

    linhas += linha;

    inputNome.value = '';;
  inputNumero.value = ''; // Limpar campo de numero
}

function atualizarConteudo() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}