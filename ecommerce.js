// administrador

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
// const inputStock = document.getElementById("stock");
// const botonDatos = document.getElementById("botonDatos");

class Datos {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    //     this.stock = stock;
  }
}

let datos = [];
if (localStorage.getItem("datos")) {
  datos = JSON.parse(localStorage.getItem("datos"));
}


botonDatos.onclick = () => {
  const datosNuevo = new Datos(
    inputNombre.value,
    apellido.value,
    Swal.fire({
      title: 'Queres guardar tus datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'Exitos')
      } else if (result.isDenied) {
        Swal.fire('Datos no guardados', '', 'info')
      }
    })
    //     inputStock.value
  );
  inputNombre.value = ""
  inputApellido.value = ""
  console.log(datos)

  datos.push(datosNuevo);
  localStorage.setItem("datos", JSON.stringify(datos));
  console.log(datos);
};

// cliente


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
  Swal.fire({
    title: 'Genial!',
    text: 'Gracias por pasar por Lavigne!!',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  //alert(`El total a pagar es ${totalCompra}`);
};
