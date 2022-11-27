const productos = [];
const nombre = document.getElementById(`nombre`);
const apellido = document.getElementById(`apellido`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`)


const formulario = document.getElementById("formulario");

class Producto {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const producto1 = new Producto(1, "buzos", 6000, 80);
productos.push(producto1);
const producto2 = new Producto(2, "remeras", 5000, 70);
productos.push(producto2);
const producto3 = new Producto(3, "pantalones", 4000, 60);
productos.push(producto3);
const producto4 = new Producto(4, "boxers", 2000, 50);
productos.push(producto4);
const producto5 = new Producto(5, "medias", 1000, 90);
productos.push(producto5);

const selectTag = document.getElementById("lista");

productos.forEach((producto) => {
  const optionTag = document.createElement("option");
  optionTag.innerText = `${producto.name}: $${producto.price}`;
  selectTag.append(optionTag);
  console.log(producto.name, producto.price)
});
formulario.onsubmit = (e) => {
  e.preventDefault();
  console.log("SUBMIT");
  console.log(nombre.value);
  alert(`Hola ${nombre.value} ${apellido.value}, bienvenido`);
  const childrenArray = Array.from(e.target.children);
  childrenArray.forEach((Child) => {
    console.log(nombre.value, apellido.value, email.value, password.value);
  });
};
