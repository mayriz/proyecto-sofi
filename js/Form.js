class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
