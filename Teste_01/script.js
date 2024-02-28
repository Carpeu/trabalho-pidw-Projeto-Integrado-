
// script.js

// Função para carregar as etapas do processo
function carregarEtapas() {
    fetch('php/consultar_etapas.php')
        .then(response => response.json())
        .then(data => {
            const listaEtapas = document.getElementById('listaEtapas');
            listaEtapas.innerHTML = '';
            data.forEach(etapa => {
                const item = document.createElement('li');
                item.textContent = etapa;
                listaEtapas.appendChild(item);
            });
        })
        .catch(error => console.error('Erro ao carregar etapas:', error));
}

// Event listener para cadastrar etapa
document.getElementById('formEtapa').addEventListener('submit', function(event) {
    event.preventDefault();
    const etapaNome = document.getElementById('etapaNome').value;
    fetch('php/cadastrar_etapa.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        carregarEtapas(); // Atualiza a lista de etapas após cadastrar uma nova etapa
    })
    .catch(error => console.error('Erro ao cadastrar etapa:', error));
});

// Event listener para cadastrar cliente
document.getElementById('formCliente').addEventListener('submit', function(event) {
    event.preventDefault();
    const clienteNome = document.getElementById('clienteNome').value;
    fetch('php/cadastrar_cliente.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Erro ao cadastrar cliente:', error));
});

// Carregar as etapas ao carregar a página
document.addEventListener('DOMContentLoaded', carregarEtapas);

