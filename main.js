const form = document.getElementById('formulario');
let linhas = '';

const nomes = []
const telefone = []

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarConteudo();
    atualizaTotalContatos(); 
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('numero-celular');

    if (telefone.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já está cadastrado`)
    } else {
        nomes.push(inputNome.value);
        telefone.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value} </td>`;
        linha += `<td>${inputNumero.value} </td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizarConteudo() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function inputTotal() {
    return nomes.length;
}

function atualizaTotalContatos() {
    const total = inputTotal();
    document.getElementById('total-contatos').innerHTML = total; 
}