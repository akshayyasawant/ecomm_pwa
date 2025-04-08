function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
  }
  
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product} added to cart!`);
  }
  
  function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const emptyCartDiv = document.getElementById('empty-cart');
  
    if (cart.length === 0) {
      emptyCartDiv.style.display = 'block';
      return;
    }
  
    cart.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `${item} <button onclick="removeFromCart(${i})">❌</button>`;
      cartItemsDiv.appendChild(div);
    });
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  }
  
  window.onload = function () {
    updateCartCount();
    if (document.getElementById('cart-items')) displayCartItems();
  };
  