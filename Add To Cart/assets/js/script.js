// Array of product objects
const products = [
  {
    id: 1,
    name: "Burger",
    price: "12",
    image: ".\\assets\\images\\1.jpg",
  },
  {
    id: 2,
    name: "Cold-Coffee",
    price: "10",
    image: ".\\assets\\images\\2.jpg",
  },
  {
    id: 3,
    name: "Coke",
    price: "8",
    image: ".\\assets\\images\\3.jpg",
  },
  {
    id: 4,
    name: "Fries",
    price: "10",
    image: ".\\assets\\images\\4.jpg",
  },
  {
    id: 5,
    name: "Garlic Bread",
    price: "9",
    image: ".\\assets\\images\\5.jpg",
  },
  {
    id: 6,
    name: "Hot-Dog",
    price: "10",
    image: ".\\assets\\images\\6.jpg",
  },
  {
    id: 7,
    name: "Noodles",
    price: "9",
    image: ".\\assets\\images\\7.jpg",
  },
  {
    id: 8,
    name: "Pancake",
    price: "7",
    image: ".\\assets\\images\\8.jpg",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

// Render products on the index page
if (document.getElementById("products")) {
  const productContainer = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col-md-3 mb-4";

    productElement.innerHTML = `<div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
              <h5 class="card-title fw-medium fs-4">${product.name}</h5>
              <p class="card-text fw-semibold fs-5">$${product.price}</p>
              <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      </div>`;
    productContainer.appendChild(productElement);
  });
}

// Render cart on cart page
if (document.getElementById("my-cart")) {
  updateCart();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("my-cart");
  const totalContainer = document.getElementById("total");

  if (cartItemsContainer && totalContainer) {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((product, index) => {
      const cartItem = document.createElement("li");
      cartItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      cartItem.innerHTML = `<div class="cart-item-details">
              <img src="${product.image}" alt="${product.name}" class="img-thumbnail mr-3" style="width: 100px;">
              <span class="fw-bolder ms-2 fs-5">${product.name} - $${product.price} x ${product.quantity}</span>
          </div>
          <button class="btn btn-dark" onclick="removeFromCart(${index})">Remove</button>`;
      cartItemsContainer.appendChild(cartItem);
      total += parseFloat(product.price) * product.quantity;
    });
    totalContainer.innerText = `TOTAL: $${total.toFixed(2)}`;
  }
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;
  }
}

function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  updateCartCount();
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  if (document.getElementById("my-cart")) {
    updateCart();
  }
});
