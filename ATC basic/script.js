let cart = [];
let total = 0;

function addToCart(itemName) {
  let price;
  switch (itemName) {
    case "Burger":
      price = 10;
      break;
    case "Pizza":
      price = 12;
      break;
    default:
      price = 0;
  }

  cart.push({ name: itemName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItem = document.getElementById("cart-items");
  cartItem.innerHTML = "";
  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    cartItem.appendChild(li);
  });

  document.getElementById('total').textContent = total
}
