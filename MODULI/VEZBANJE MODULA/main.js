// import generateImage from "./modules/general.js";
// import { generateList, generateListItem } from "./modules/list.js";
// import { generateTable, TableRow, TableItem } from "./modules/table.js";

// document.body.appendChild(generateImage("images/prva.jpg"));
// document.body.appendChild(generateImage("images/druga.jpg"));
// document.body.appendChild(generateImage("images/treca.jpg"));

// let ul = generateList(document.body);
// let li1 = generateListItem(ul, "images/prva.jpg");
// let li2 = generateListItem(ul, "images/druga.jpg");
// let li3 = generateListItem(ul, "images/treca.jpg");

// let table = generateTable(document.body);
// let tr = TableRow(table);
// let td1 = TableItem(tr, "images/prva.jpg");
// let td2 = TableItem(tr, "images/druga.jpg");
// let td3 = TableItem(tr, "images/treca.jpg");

import generateImage from "./modules/general.js";
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

document.body.appendChild(generateImage("images/prva.jpg"));
document.body.appendChild(generateImage("images/druga.jpg"));
document.body.appendChild(generateImage("images/treca.jpg"));

let ul = List.generateList(document.body);
let li1 = List.generateListItem(ul, "images/prva.jpg");
let li2 = List.generateListItem(ul, "images/druga.jpg");
let li3 = List.generateListItem(ul, "images/treca.jpg");

let table = Table.generateTable(document.body);
let tr = Table.TableRow(table);
let td1 = Table.TableItem(tr, "images/prva.jpg");
let td2 = Table.TableItem(tr, "images/druga.jpg");
let td3 = Table.TableItem(tr, "images/treca.jpg");
