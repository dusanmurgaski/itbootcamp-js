import generateImage from "./general.js";

function generateList(parent) {
  let lista = document.createElement("ul");
  parent.appendChild(lista);
  lista.style.overflow = "hidden";
  lista.style.listStyleType = "none";
  return lista;
}

function generateListItem(parent, src) {
  let li = document.createElement("li");
  li.style.float = "left";
  let img = generateImage(src);
  li.appendChild(img);
  parent.appendChild(li);
  return li;
}

export { generateList, generateListItem };
