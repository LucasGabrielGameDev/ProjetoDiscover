function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem na tag.
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Gabriel de terno bege e gravata terracota"
    )
  } else {
    //se tiver sem light mode, manter a imagem atual
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Gabriel de terno bege e gravata terracota"
    )
  }
}

const contentTitle = [
  "Introdução",
  "Transville",
  "Quimidrol",
  "Tiflux",
  "Motorista de aplicativo",
  "Futuro",
]
const contentText = [
  "Saudações caro leitor! </br> </br> Aqui irei descrever brevemente como foram minhas experiências profissionais, como contribui para as empresas e o que aprendi em cada uma delas.",
  "Minha primeira experiência profissional foi na Transville através do programa de Jovem Aprendiz, atuei como Auxiliar Administrativo, foi uma excelente oportunidade para aprender como funciona a dinâmica de um escritório, hierarquia e a importância da pontualidade.",
  "Na Quimidrol eu trabalhei como Auxiliar de Produção, estava num momento complicado da minha vida, então foi uma oportunidade para reconstruir a minha vida, me ajudou a revitalizar a minha visão sobre algumas profissões, aqui eu entendi que o meu ponto forte, como profissional, é a constância no meu desempenho no trabalho, e com o tempo a eficiência vai aumentando a minha produtividade. Também notei que sou extremamente metódico e possuo uma visão criativa que me permite encontrar maneiras mais eficientes para resolver problemas.",
  "Tiflux",
  "Motorista de aplicativo",
  "Futuro",
]
function setContent(index) {
  document.getElementById("contentTitle").innerHTML = contentTitle[index]
  document.getElementById("contentText").innerHTML = contentText[index]
}
