const stockProductos = [
  {
    id: 1,
    nombre: "Age Of Empires 2",
    cantidad: 1,
    desc: "Juego de estrategia.",
    precio: 9200,
    img: "img/age.jpg",
  },
  {
    id: 2,
    nombre: "Ghost Recon",
    cantidad: 1,
    desc: "Luchas con los mejores traficantes del mundo",
    precio: 8500,
    img: "img/ghost.jpg",
  },
  {
    id: 3,
    nombre: "Gta 5",
    cantidad: 1,
    desc: "El mejor juego lejos..",
    precio: 7570,
    img: "img/gta.jpg",
  },
  {
    id: 4,
    nombre: "God of War Ragnarok",
    cantidad: 1,
    desc: "Vive la experiencia al limite con Kratos",
    precio: 10000,
    img: "img/godofwar.jpg",
  },
  {
    id: 5,
    nombre: "Assasain Creed Valhalla",
    cantidad: 1,
    desc: "Intrigante e inmaculada historia",
    precio: 9200,
    img: "img/asesino.jpg",
  },
  {
    id: 6,
    nombre: "Payday 2",
    cantidad: 1,
    desc: "Conviertete en el mejor ladron",
    precio: 5200,
    img: "img/payday.jpg",
  },
  {
    id: 7,
    nombre: "Minecraft",
    cantidad: 1,
    desc: "No compres esto por tu bien",
    precio: 1400,
    img: "img/minecraft.jpg",
  },
  {
    id: 8,
    nombre: "Call Of Duty mm54",
    cantidad: 1,
    desc: "Dispara como nunca",
    precio: 12000,
    img: "img/cod.jpg",
  },
  {
    id: 9,
    nombre: "Fifa 2023",
    cantidad: 1,
    desc: "Juego de futbol",
    precio: 14000,
    img: "img/fifa.jpg",
  },
  {
    id: 10,
    nombre: "Fornite",
    cantidad: 1,
    desc: "Battle Royale",
    precio: 1200,
    img: "img/fornite.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector("#procesar-pago");

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  if (activarFuncion) {
    document.querySelector("#activarFuncion").click(procesarPedido);
  }
});
if (formulario) {
  formulario.addEventListener("submit", enviarCompra);
}

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "No tienes nada en el carrito!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Agregar al carrito</button>
      </div>
    </div>
      `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some((prod) => prod.id === id);

  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.id === id) {
        prod.cantidad++;
      }
    });
  } else {
    const item = stockProductos.find((prod) => prod.id === id);
    carrito.push(item);
  }
  mostrarCarrito();
};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
    });
  }

  if (carrito.length === 0) {
    modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

function enviarCompra(e) {
  e.preventDefault();
  const cliente = document.querySelector("#cliente").value;
  const email = document.querySelector("#correo").value;

  if (email === "" || cliente == "") {
    Swal.fire({
      title: "¡Tenes que ingresar tus datos!",
      text: "Completa el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-flex");
    spinner.classList.remove("d-none");

    setTimeout(() => {
      spinner.classList.remove("d-flex");
      spinner.classList.add("d-none");
      formulario.reset();

      const alertExito = document.createElement("p");
      alertExito.classList.add(
        "alert",
        "alerta",
        "d-block",
        "text-center",
        "col-12",
        "mt-2",
        "alert-success"
      );
      alertExito.textContent = "Su compra ha sido realizada correctamente";
      formulario.appendChild(alertExito);

      setTimeout(() => {
        alertExito.remove();
      }, 3000);
    }, 3000);
  }
  localStorage.clear();
}

