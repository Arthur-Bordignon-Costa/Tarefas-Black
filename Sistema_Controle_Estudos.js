let disciplinas = [];
const form = document.getElementById('formDisciplina');
const inputNome = document.getElementById('nome');
const inputHoras = document.getElementById('horas');
const lista = document.getElementById('listaDisciplinas');

function carregarDados() {
  const dadosSalvos = localStorage.getItem('disciplinas');
  if (dadosSalvos !== null) {
    disciplinas = JSON.parse(dadosSalvos);
  } else {
    disciplinas = [];
  }
  renderizarLista();
}

function salvarDados() {
  localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const novaDisciplina = {
    nome: inputNome.value.trim(),
    horasEstudadas: Number(inputHoras.value),
    concluida: false
  };
  disciplinas.push(novaDisciplina);
  salvarDados();
  renderizarLista();
  form.reset();
});

function renderizarLista() {
  lista.innerHTML = '';
  disciplinas.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.concluida) {
      li.classList.add('concluida');
    }
    li.innerHTML = `
      <span><strong>${item.nome}</strong> - ${item.horasEstudadas}h estudadas</span>
      <button onclick="alternarStatus(${index})">
        ${item.concluida ? 'Refazer' : 'Concluir'}
      </button>
    `;
    lista.appendChild(li);
  });
}

function alternarStatus(index) {
  disciplinas[index].concluida = !disciplinas[index].concluida;
  salvarDados();
  renderizarLista();
}

carregarDados();