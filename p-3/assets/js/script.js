let cart = []
let total = 0

function addToCart(itemName) {
    let price
    switch (itemName) {
      case 'Garlic Bread':
        price = 8
        break
      case 'Pizza':
        price = 10
        break
        case 'Hot Dog':
        price = 9
        break
        case 'Pasta':
        price = 10
        break
        case 'French Fries':
        price = 8
        break
        case 'Taco':
        price = 10
        break
        case 'Noodles':
        price = 8
        break
        case 'Burger':
        price = 10
        break
        case 'Coke':
        price = 6
        break
        case 'Pancakes':
        price = 5
        break
        case 'Hot Dog':
        price = 9
        break
        case 'Cold Coffee':
        price = 8
        break
        case 'Waffle':
        price = 8
        break
      default:
        price = 0
    }
    cart.push({name: itemName, price})
    total += price
    updateCart();

    function updateCart() {
        let cartItem = document.getElementById('cart-items')
        cartItem.innerHTML = ''
        cart.forEach(item => {
          let li = document.createElement('li')
          li.textContent = `${item.name} - ${item.price}`
          cartItem.appendChild(li)
        });
        document.getElementById('total').textContent = total
      }

  }