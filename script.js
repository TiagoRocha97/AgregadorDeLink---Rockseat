function toggleModel() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light, add a img light
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    //senao, imagem normal
    img.setAttribute("src", "./assets/Avatar-Delia.png")
  }
}
