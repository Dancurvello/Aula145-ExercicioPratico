// Função para exibir informações na página
function exibirInformacoes() {
  // Tamanho de tela
  document.getElementById(
    "screenSize"
  ).innerHTML = `${window.screen.width} x ${window.screen.height}`;

  // Profundidade de cores
  document.getElementById(
    "colorDepth"
  ).innerHTML = `${window.screen.colorDepth} bits`;

  // Caminho e porta da página
  document.getElementById(
    "pageLocation"
  ).innerHTML = `${window.location.pathname}:${window.location.port}`;

  // Geolocalização (neste exemplo, apenas verifica se o recurso está disponível)
  if ("geolocation" in navigator) {
    document.getElementById("geolocation").innerHTML = "Suportado";
  } else {
    document.getElementById("geolocation").innerHTML = "Não suportado";
  }
}

// Chamar a função para exibir informações quando a página carregar
window.onload = exibirInformacoes;
