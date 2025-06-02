const botoes = document.querySelectorAll(".botao");
const abasConteudo = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        selecionarAba(botao);
        mostrarConteudo(indice);
    });
});

function selecionarAba(botao) {
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botao.classList.add("ativo");
}

function mostrarConteudo(indice) {
    abasConteudo.forEach(conteudo => conteudo.classList.remove("ativo"));
    abasConteudo[indice].classList.add("ativo");
}

// Data-alvo: 16 de julho de 2026 às 00:00
const dataDestino = new Date("2026-07-16T00:00:00").getTime();

function atualizarContadores() {
    const agora = new Date().getTime();
    const tempoRestante = dataDestino - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    for (let i = 0; i < 4; i++) {
        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    }
}

atualizarContadores();
setInterval(atualizarContadores, 1000);
return;
