// your JavaScript file
const container = document.querySelector("#container");

const element1 = container.appendChild(document.createElement("p"));
element1.textContent = "Hey, I'm red!";
element1.style.color = "red";   

container.appendChild(element1);

const element2 = container.appendChild(document.createElement("h3"));
element2.textContent = "Hey, I'm blue h3";
element2.style.color = "blue";   

container.appendChild(element2);

const divElement = container.appendChild(document.createElement("div"));
divElement.style.backgroundColor = "pink";
divElement.style.border = "1px solid black";

const h1Element = divElement.appendChild(document.createElement("h1"));
h1Element.textContent = "I'm in a div";

const pElement = divElement.appendChild(document.createElement("p"));
pElement.textContent = "ME TOO!";

container.appendChild(divElement);
