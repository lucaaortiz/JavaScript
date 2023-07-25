// Variables generales
let carrito = [];
const carritoDOM = document.querySelector("#carrito");
const productosDOM = document.querySelector("#contenedor-productos");
const finalizarCompraBtn = document.querySelector("#btn-finalizar-compra"); // Obtener el botón por su ID

// Función para comenzar
function init() {
  
  productosDOM.addEventListener("click", addToCart);

  
  carritoDOM.addEventListener("click", removeFromCart);

  
  finalizarCompraBtn.addEventListener("click", finalizarCompra);

  // Local storage
  loadCartFromLocalStorage();

  renderCart();
}

// Función para agregar un producto al carrito
function addToCart(event) {
  if (event.target.classList.contains("btn-add-to-cart")) {
    const item = event.target.closest(".image-card");

    const product = {
      image: item.querySelector("img").src,
      title: item.querySelector(".card-title").textContent,
      price: parseFloat(item.querySelector(".price").textContent.replace("$", "")),
      quantity: parseInt(item.querySelector(".quantity-input").value),
    };

    const existingItem = carrito.find((item) => item.title === product.title);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      carrito.push(product);
    }

    updateLocalStorage();
    renderCart();
  }
}

// Función para eliminar un producto del carrito
function removeFromCart(event) {
  if (event.target.classList.contains("btn-remove-from-cart")) {
    const title = event.target.dataset.title;
    carrito = carrito.filter((item) => item.title !== title);
    updateLocalStorage();
    renderCart();
  }
}

// Función para los productos del carrito en el DOM, los rendercart
function renderCart() {
  carritoDOM.innerHTML = "";

  if (carrito.length === 0) {
    carritoDOM.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    carrito.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("carrito-item");
      div.innerHTML = `
        <img src="${item.image}" alt="Imagen">
        <div>
          <h4>${item.title}</h4>
          <p>Precio unitario: $${item.price.toFixed(2)}</p>
          <p>Cantidad: ${item.quantity}</p>
          <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
          <button class="btn btn-danger btn-remove-from-cart" data-title="${item.title}">Eliminar</button>
        </div>
      `;
      carritoDOM.appendChild(div);
    });

    const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);
    carritoDOM.innerHTML += `<div class="carrito-total">Total: $${total.toFixed(2)}</div>`;
  }
}

// Actualizar el local storage
function updateLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar los productos
function loadCartFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("carrito"));
  if (data) {
    carrito = data;
  }
}

// Función para finalizar la compra
function finalizarCompra() {
  alert("¡Gracias por tu compra! El total de la compra es: $" + getTotalCompra());
  carrito = [];
  updateLocalStorage();
  renderCart();
}

// Función para obtener el total de la compra
function getTotalCompra() {
  return carrito.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
}

// Inicializar la aplicación
init();
