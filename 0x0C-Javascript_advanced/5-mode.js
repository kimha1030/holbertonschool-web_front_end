#!/usr/bin/node

function changeMode(
  size,
  weight = "",
  transform = "",
  background = "",
  color = ""
) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  //Add paragraph
  let newParagraph = document.createElement("p");
  let pText = document.createTextNode("Welcome Holberton!");
  newParagraph.appendChild(pText);
  document.querySelector("body").appendChild(newParagraph);

  //Add button Spooky
  let btnSpooky = document.createElement("button");
  let bsText = document.createTextNode("Spooky");
  btnSpooky.appendChild(bsText);
  btnSpooky.setAttribute("id", "btn-spooky");
  document.querySelector("body").appendChild(btnSpooky);
  document.getElementById("btn-spooky").onclick = spooky;

  //Add button Dark mode
  let btnDark = document.createElement("button");
  let bdText = document.createTextNode("Dark mode");
  btnDark.appendChild(bdText);
  btnDark.setAttribute("id", "btn-dark");
  document.querySelector("body").appendChild(btnDark);
  document.getElementById("btn-dark").onclick = darkMode;

  //Add button Scream mode
  let btnScream = document.createElement("button");
  let bmText = document.createTextNode("Scream mode");
  btnScream.appendChild(bmText);
  btnScream.setAttribute("id", "btn-scream");
  document.querySelector("body").appendChild(btnScream);
  document.getElementById("btn-scream").onclick = screamMode;
}

main();
