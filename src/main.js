import { products } from "./data"
import dataHbs from "./data-template.hbs"

console.log(products);
console.log(dataHbs);

const listRef = document.querySelector(".data-list")

listRef.innerHTML = dataHbs(products)