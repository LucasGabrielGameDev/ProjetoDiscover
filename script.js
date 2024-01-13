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
      "Foto de Mayk Brito usando óculos escuros, sorrindo em um fundo gradiente entre rosa e azul"
    )
  } else {
    //se tiver sem light mode, manter a imagem atual
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
