const nomeTorneio = process.argv[2]
const cidadeTorneio = process.argv[3]
const dataTorneio = process.argv[4]
if (!nomeTorneio || !cidadeTorneio || !dataTorneio) {
    console.log('Por favor, forneça o nome do torneio, a cidade e a data como argumentos.');
    console.log('Tente rodar assim: node Gerenciamentos_Equipes_Torneio.js "Nome do Torneio" "Cidade do Torneio" "Data do Torneio"');
    process.exit(1);
} else {
    console.log('================================');
    console.log (`O ${nomeTorneio} será realizado na cidade de ${cidadeTorneio} no ano ${dataTorneio}.`);
}
const time = ['Binary Masters', 'Bug Hunters', 'Code Warriors', 'Stack Legends', 'Null Squad'];
const pontuacoes = [];
function gerarPontuacao() {
    for (let i = 0; i < time.length; i++) {
        pontuacoes.push(Math.floor(Math.random() * 101));
    }
}
function exibirEquipes() {
    console.log ('================================');
    console.log(`Tem ${time.length} equipes participando do torneio`);
    for (let i = 0; i < time.length; i++) {
        console.log (`Equipe ${i + 1}: ${time[i]}`);
    }    
}
function exibirPontuacao() {
    console.log('================================');
    console.log('Pontuação das Equipes:');
    for (let i = 0; i < time.length; i++) {
        console.log(`A equipe ${time[i]} possui ${pontuacoes[i]} pontos`);
    }
}
function relatorioTorneio() {
    console.log('================================');
    console.log('Relatório do Torneio:');
    for (let i = 0; i < time.length; i++) {
        console.log(`Equip: ${time[i]}\nPontos: ${pontuacoes[i]}`);
    }
}
function estatisticas() {
    console.log('================================');
    console.log('Estatísticas do Torneio:');
    let totalPontos = 0;
    let maiorPontuacao = -1;
    let equipeVencedora = '';
    for (let i = 0; i < time.length; i++) {
        const pontos = pontuacoes[i];
        totalPontos += pontos;
        if (pontos > maiorPontuacao) {
            maiorPontuacao = pontos;
            equipeVencedora = time[i];
        }
    }
    console.log(`Total de pontos: ${totalPontos}`);
    let mediaPontos = totalPontos / time.length;
    console.log(`Média de pontos: ${mediaPontos.toFixed(2)}`);
    console.log(`Equipe vencedora: ${equipeVencedora} com ${maiorPontuacao} pontos`);
    console.log('================================');
}
gerarPontuacao();
exibirEquipes();
exibirPontuacao();
relatorioTorneio();
estatisticas();