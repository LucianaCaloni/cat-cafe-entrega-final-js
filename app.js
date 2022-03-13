//Productos de la tienda

class Shop {
  constructor(product, quantity) {
    this.id = product.id;
    this.brand = product.brand;
    this.description = product.description;
    this.price = product.price;
    this.quantity = quantity;
    this.totalPrice = product.price;
  }
  agregarUnidad() {
    this.quantity++;
  }

  quitarUnidad() {
    this.quantity--;
  }

  actualizarPrecioTotal() {
    this.totalPrice = this.price * this.quantity;
  }
}

const products = [
  {
    id: 0,
    brand: "Model",
    price: 300,
    description: "Arena aglutinante",
    img: "./images/productos/arenaAglutinante.jpg",
  },
  {
    id: 1,
    brand: "Pupis",
    price: 1000,
    description: "Cama para gatos peludita",
    img: "./images/productos/camagato1.jpeg",
  },
  {
    id: 2,
    brand: "Pupis",
    price: 1500,
    description: " Cama para gatos tipo almohada",
    img: "/images/productos/camagato2.jpg",
  },
  {
    id: 3,
    brand: "Michi",
    price: 900,
    description: "Comedero automatico",
    img: "./images/productos/comedero.jpg",
  },
  {
    id: 4,
    brand: "Catit",
    price: 1200,
    description: "Comedero interactivo",
    img: "./images/productos/comedero2.jpg",
  },
  {
    id: 5,
    brand: "Michi",
    price: 500,
    description: "Varita jueguete",
    img: "./images/productos/jueguete1.jfif",
  },
  {
    id: 6,
    brand: "Michi",
    price: 2000,
    description: "Torre gato dos pisos",
    img: "./images/productos/torre1.jpg",
  },
  {
    id: 7,
    brand: "Michi",
    price: 2500,
    description: "Torre gato tres pisos",
    img: "./images/productos/torre2.jpg",
  },
  {
    id: 8,
    brand: "Michi",
    price: 3000,
    description: "Tunnel gatos",
    img: "./images/productos/tunelGato.jpg",
  },
];

let cart = [];

///
function checkCartStorage() {
  let contInStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
  console.log("contenido en chequear Carrito en ls ", contInStorage);

  // Si existe el array del carrito, lo retornará
  if (contInStorage) {
    let array = [];
    for (let i = 0; i < contInStorage.length; i++) {
      let product = new Shop(contInStorage[i], contInStorage[i].quantity);
      product.actualizarPrecioTotal();
      array.push(product);
    }

    return array;
  }
  // Si no existe ese array en el LS, esta función devolverá un array vacío
  return [];
}

//declaracion de funciones

function imprimirArrayHtml(products) {
  let productos = document.getElementById("productos");
  for (const product of products) {
    let card = document.createElement("div");
    card.innerHTML = `
      <div class="card text-center h-100" style="width: 18rem;">
          <div class="card-body h-100">
              <img src="${product.img}" id="" class="card-img-top img-fluid" alt="">
              <h2 class="card-title">${product.brand}</h2>
              <h5 class="card-subtitle mb-2 text-muted">${product.description}</h5>
              <p class="card-text"><i class="fa-solid fa-dollar-sign"></i>${product.price}</p>
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button id="agregar${product.id}" type="button" onclick="" class="btn btn-info"> Agregar </button>
              </div>
          </div>
      </div>      
      `;
    productos.appendChild(card);
    // let boton = document.getElementById(`agregar${product.id}`);
    // boton.onclick = () => addCart(product.id);
    $(`#agregar${product.id}`).on("click", () => addCart(product.id));
  }
}

function drawTable(cart) {
  let productos = document.getElementById("cart");
  productos.innerHTML = "";

  let totalPrice;

  if (cart) {
    totalPrice = getTotalPrice(cart);
    let table = document.createElement("div");
    table.innerHTML = `
          <table id="tablaCarrito" class="table">
          <thead>
              <tr  class="table-danger border-secondary">
              
              <th scope="col">Carrito</th>
                 
              </tr>
          </thead>
          <tbody id="bodyTabla">
              <tr>
                  <td >Total: $${totalPrice}</td>
                  
              </tr>
          <tr> 
              <td> <button id="vaciarCarrito" class="btn btn-danger"> Vaciar Carrito </button> </td>
          </tr>
          
          
          </tbody>
      </table>
      `;
    productos.appendChild(table);

    let bodyTabla = document.getElementById("bodyTabla");
    for (let product of cart) {
      let datos = document.createElement("div");
      datos.innerHTML = `
          <tr>
                <th scope="row"></th>
                <td>${product.brand}</td>
                <td>${product.quantity}</td>
                <td>$${product.totalPrice}</td>
                <td><button id="eliminar${product.id}" type="button" class="btn btn-dark">Eliminar</button></td>
            </tr>
          `;
      bodyTabla.appendChild(datos);
      let boton = document.getElementById(`eliminar${product.id}`);
      boton.onclick = () => discartFromCart(product.id);

      //PROBANDO VACIAR CARRITO//////////////////////////
      const emptyCart = document.getElementById("vaciarCarrito");
      emptyCart.addEventListener("click", () => {
        clearCart();
        drawTable();
        ///VACIAR LOCAR STORAGE AL VACIAR CARRITO///////////////
        localStorage.clear(cart);
      });
    }
  }
}

function addCart(idProduct) {
  let productInCart = cart.find((element) => {
    if (element.id == idProduct) {
      return true;
    }
  });
  if (productInCart) {
    let index = cart.findIndex((element) => {
      if (element.id === productInCart.id) {
        return true;
      }
    });
    cart[index].agregarUnidad();
    cart[index].actualizarPrecioTotal();
  } else {
    cart.push(new Shop(products[idProduct], 1));
  }
  //carrito storage

  localStorage.setItem("carritoEnStorage", JSON.stringify(cart));
  drawTable(cart);
}

function discartFromCart(id) {
  let product = cart.find((product) => product.id === id);
  let index = cart.findIndex((element) => {
    if (element.id === product.id) {
      return true;
    }
  });
  if (product.quantity > 1) {
    console.log(`Cantidad disponible: ${product.quantity}`);
    cart[index].quitarUnidad();
    cart[index].actualizarPrecioTotal();
  } else {
    cart.splice(index, 1);
    if (cart.length === 0) {
      cart = [];
    }
  }
  localStorage.setItem("carritoEnStorage", JSON.stringify(cart));
  drawTable(cart);
}
//probar funcion vaciar carrito que recomendo profe.
function clearCart() {
  cart = [];
}

function getTotalPrice(array) {
  let totalPrice = 0;

  for (const product of array) {
    totalPrice += product.totalPrice;
  }
  return totalPrice;
}
///Comprar//
function buy() {
  const comprar = document.getElementById("completarCompra");

  comprar.addEventListener("click", () => {
    clearCart();
    drawTable();
    ///VACIAR LOCAR STORAGE AL VACIAR CARRITO///////////////
    localStorage.clear(cart);
    // location.reload();
  });
}

imprimirArrayHtml(products);
cart = checkCartStorage();
drawTable(cart);
buy();
