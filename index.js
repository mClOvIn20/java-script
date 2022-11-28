const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const botonDatos = document.getElementById("botonDatos")

 
class Producto {
    constructor(nombre,precio,stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

let productos = []
if(localStorage.getItem("productos")){
    productos = JSON.parse(localStorage.getItem("productos"))
}
botonDatos.onclick = () => {
    const productoNuevo = new Producto(inputNombre.value, inputPrecio.value,inputStock.value)
    productos.push(productoNuevo)
    localStorage.setItem("productos", JSON.stringify(productos))
    console.log(productos)
}


// botonDatos.onclick = () => {
//     const usuario = {
//         nombre: inputNombre.value,
//         apellido: inputApellido.value
//     }
//     inputNombre.value = ''
//     inputApellido.value = ''
//     console.log(usuario)

//     localStorage.setItem('infoUsuario',JSON.stringify(usuario))

// }

// const selectElem = document.getElementById('lista')
//const botonAgregar = document.getElementById('agregar')
// const botonFinzalizar = document.getElementById('finalizar')

// const productosArray = JSON.parse(localStorage.getItem('productos'))


// productosArray.forEach (prod=>{
//    const optionProd =  document.createElement('option')
//    optionProd.innerText = `${prod.nombre}: ${prod.precio}`
//    optionProd.setAttribute('value',`${prod.nombre}`)
//    selectElem.append(optionProd)
// })