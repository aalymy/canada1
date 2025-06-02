function iniciarContadorRegressivo(dataAlvo, elementoId) {
  function atualizar() {
    const agora = new Date();
    const alvo = new Date(dataAlvo);
    const diferenca = alvo - agora;

    const elemento = document.getElementById(elementoId);

    if (diferenca <= 0) {
      elemento.textContent = "Chegou o grande dia!";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    elemento.textContent = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
  }

  atualizar(); 
  const intervalo = setInterval(atualizar, 1000); 
}


iniciarContadorRegressivo("2026-07-16T00:00:00", "contador");

