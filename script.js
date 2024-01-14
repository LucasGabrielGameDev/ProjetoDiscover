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
