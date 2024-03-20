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
  "Trabalhei como Analista de Suporte na Tiflux, foi uma experiência impressionante, pois tive a oportunidade de trabalhar junto ao público, o que me fez aprimorar minhas habilidades de comunicação, tanto com o público quanto com internamente entre a equipe. Foi o primeiro contato que tive com as áreas de tecnologia, pois estava em contato constante com o time de Dev. </br> Também descobri que possuo certa habilidade para a documentação de processos.",
  "Atualmente estou nessa fase, lugar onde levo a minha habilidade de se comunicar com o público ao máximo, ao mesmo tempo em que começo a ter mais liberdade de horários e uma remuneração volátil e incerta. Certamente está sendo um desafio e tanto para alguém tão metódico quanto eu. Ao mesmo tempo me abre a mente para novas formas de ganhar dinheiro, de administrá-lo e financiar projetos futuros.",
  "Para o meu futuro estou com o seguinte pensamento. </br> No curto prazo, estou muito interessado em trabalhar desenvolvendo aplicações WEB, usando tecnologias como Javascript, Node.js e afins. Eu tenho um perfil generalista, então me vejo seguindo a trilha de Desenvolvedor Full Stack, se eu tiver a oportunidade de liderar um time em algum momento seria de grande valia para mim. </br> A longo prazo, farei com que o meu sonho de ser desenvolvedor de jogos se torne realidade. Para isso estarei me preparando sejam com o aprendizado de novas tecnologias, reunindo recursos (principalmente financeiro), aprimorando habilidades de liderança e de empreendedorismo.",
]
function setContent(index) {
  document.getElementById("contentTitle").innerHTML = contentTitle[index]
  document.getElementById("contentText").innerHTML = contentText[index]
}
