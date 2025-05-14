document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active')
})
document.querySelector('.cart-mobile').addEventListener('click', function() {
    document.querySelector('.cart-store').classList.toggle('active')
})

document.querySelector('.cart-desktop').addEventListener('click', function() {
    document.querySelector('.cart-store-desktop').classList.toggle('active')
})

// const btn = document.querySelectorAll('.rent')
// const yellow = document.querySelector('.books')


// // <div class="cart-store-desktop">
// //     <h2>Your rental cart</h2>
// //     <div class="books"></div>
// //     <button>Confirm</button>
// // </div>

// document.querySelectorAll('button').addEventListener('click', function() {
//     document.querySelector('.cart-store-desktop').classList.toggle('active')
//     let cartBody = document.querySelector('.cart-store-desktop')
//     const bookName = document.querySelectorAll('.book-name').textContent
//     cartBody.innerHTML = `
//     <div class="cart-store-desktop">
//         <h2>Your rental cart</h2>
//         <div class="books">
//         ${bookName} x
//         </div>
//         <button>Confirm</button>
//     </div>
    
//     `
// })


const cart = {};
const cartBody = document.querySelector('.cart-store-desktop');

function numberBooks() {
  let booksHTML = '';
  let totalPrice = 0;

  for (let name in cart) {
    const item = cart[name];
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    booksHTML += `<p>${name} x ${item.quantity} = $${itemTotal.toFixed(2)} ( $${item.price.toFixed(2)})</p>`;
  }

  cartBody.innerHTML = `
    <h2>Your rental cart</h2>
    <div class="books">${booksHTML}</div>
    <p><strong>Total price: $${totalPrice.toFixed(2)}</strong></p>
    <button id="confirm">Confirm</button>
  `;
  cartBody.classList.add('active');

  document.getElementById('confirm').addEventListener('click', function () {
    cartBody.innerHTML = `<h2>Your rental cart</h2><p>Cart is empty.</p>`;
    for (let name in cart) delete cart[name];
  });
}

document.querySelectorAll('.rent').forEach((button) => {
  button.addEventListener('click', function () {
    const box = button.closest('.box');
    const name = box.querySelector('.book-name').textContent.trim();

    const price = 1.50;

    if (cart[name]) {
      cart[name].quantity += 1;
    } else {
      cart[name] = {
        price: price,
        quantity: 1
      };
    }

    numberBooks();
  });
});

const smallSize = window.matchMedia("(max-width: 450px)")
function handleScreenChange(e){
    if(e.matches){
        document.querySelector('.container').style.display = 'flex'
        document.querySelector('.container').style.flexDirection = 'column'
        document.querySelector('.container').style.padding = '0'
        document.querySelector('.container').style.alignItems = 'center'
        document.querySelector('.burger').style.display = 'flex'
    }
    else{
        document.querySelector('.container').style.display = 'grid'
        document.querySelector('.container').style.gridColumns = '8fr'
        document.querySelector('.container').style.padding = '20px'
        document.querySelector('.burger').style.display = 'none'
    }
}
handleScreenChange(smallSize);
smallSize.addEventListener('change', handleScreenChange)
