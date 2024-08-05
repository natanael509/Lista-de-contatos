
const form = document.getElementById('formulario')
    let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();


    adicionarLinha()
    atualizarConteudo()



});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('numero-celular');

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha +=`<td> ${inputNumero.value} 'max.length=11' </td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
}


function atualizarConteudo() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}