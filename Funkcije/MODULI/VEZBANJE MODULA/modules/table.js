import generateImage from "./general.js";

function generateTable(parent) {
  let tabela = document.createElement("table");
  tabela.style.border = "1px solid black";
  parent.appendChild(tabela);
  return tabela;
}
function TableRow(parent) {
  let row = document.createElement("tr");
  parent.appendChild(row);
  return row;
}
function TableItem(parent, src) {
  let td = document.createElement("td");
  let tdslika = generateImage(src);
  td.appendChild(tdslika);
  parent.appendChild(td);
  return td;
}

export { generateTable, TableRow, TableItem };
