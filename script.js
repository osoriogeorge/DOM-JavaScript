console.log("DOM JS");

const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey I’m red!";
content.style.color = "red";

container.appendChild(content);

const title = document.createElement("h3");
title.classList.add("title");
title.textContent = "I’m a blue h3!!";
title.style.color = "blue";

container.appendChild(title);

const divContent = document.createElement("div");
divContent.classList.add("divContent");
divContent.style.border = "1px solid black";
container.appendChild(divContent);

const divH1 = document.createElement("h1");
divH1.textContent = "I’m a DIV!!";
divContent.appendChild(divH1);

const divParagrapf = document.createElement("p");
divParagrapf.textContent = "ME TOO!";

divContent.appendChild(divParagrapf);
