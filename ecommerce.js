// administrador

// buscar los elementos del DOM

// const inputNombre = document.getElementById("nombre");
// const inputPrecio = document.getElementById("precio");
// const inputStock = document.getElementById("stock");
// const botonDatos = document.getElementById("botonDatos");

// class Producto {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }
// }

// let productos = [];
// if (localStorage.getItem("productos")) {
//   productos = JSON.parse(localStorage.getItem("productos"));
// }

// const producto1 = new Producto(1, "iphone", 600, 10);

// botonDatos.onclick = () => {
//   const productoNuevo = new Producto(
//     inputNombre.value,
//     inputPrecio.value,
//     inputStock.value
//   );
//   productos.push(productoNuevo);
//   localStorage.setItem("productos", JSON.stringify(productos));
//   console.log(productos);
// };

// cliente

// buscar los elementos del DOM

const selectElem = document.getElementById("lista");
const botonAgregar = document.getElementById("agregar");
const botonFinzalizar = document.getElementById("finalizar");

const productosArray = JSON.parse(localStorage.getItem("productos"));

productosArray.forEach((prod) => {
  const optionProd = document.createElement("option");
  optionProd.innerText = `${prod.nombre}: ${prod.precio}`;
  optionProd.setAttribute("value", `${prod.nombre}`);
  selectElem.append(optionProd);
});

// carrito
const carrito = [];
console.log(productosArray);
botonAgregar.onclick = () => {
  const nomProd = selectElem.value;
  const prodSelec = productosArray.find((prod) => prod.nombre === nomProd);
  carrito.push(prodSelec);
  console.log(carrito);
};

botonFinzalizar.onclick = () => {
  let totalCompra = 0;
  carrito.forEach((prod) => {
    totalCompra = totalCompra + parseInt(prod.precio);
  });
  alert(`El total a pagar es ${totalCompra}`);
};
