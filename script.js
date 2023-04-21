let color = document.querySelectorAll(".color");
let firstColor = color[0]; // pegando o primeiro color
let selected = document.querySelector(".selected");
let black = document.getElementById("PRETO");
let blue = document.getElementById("AZUL");
let red = document.getElementById("VERMELHO");
let yellow = document.getElementById("AMARELO");

function createLines() {
  for (let index = 0; index < 5; index++) {
    const tabela = document.getElementById("pixel-board");
    const divs = document.createElement("div");
    tabela.appendChild(divs);

    for (let i = 0; i < 5; i++) {
      const sessao = document.createElement("div");
      sessao.classList.add("pixel");
      divs.appendChild(sessao);
    }
  }
}

function select() {
  let color = document.querySelectorAll(".color");
  let firstColor = color[0];

  for (let index = 0; index < color.length; index++) {
    color[index].addEventListener("click", function (event) {
      firstColor.classList.remove("selected");
      event.target.classList.add("selected");
      firstColor = event.target;
    });
  }
}

function pixelColor() {
  let pixel = document.querySelectorAll(".pixel");

  for (let index = 0; index < pixel.length; index++) {
    pixel[index].addEventListener("click", function () {
      if (black.classList.contains("selected")) {
        pixel[index].style.backgroundColor = "black";
        pixel[index].style.mixBlendMode = "multiply";
      } else if (yellow.classList.contains("selected")) {
        pixel[index].style.backgroundColor = "yellow";
        pixel[index].style.mixBlendMode = "initial";
      } else if (red.classList.contains("selected")) {
        pixel[index].style.backgroundColor = "red";
        pixel[index].style.mixBlendMode = "initial";
      } else if (blue.classList.contains("selected")) {
        pixel[index].style.backgroundColor = "blue";
        pixel[index].style.mixBlendMode = "initial";
      }
    });
  }
}

function clean() {
  let pixel = document.querySelectorAll(".pixel");

  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = "white";
    pixel[index].style.mixBlendMode = "initial";
  }
}

createLines();
select();
pixelColor();

const buttonClean = document.getElementById("limpar");
buttonClean.addEventListener("click", clean);
