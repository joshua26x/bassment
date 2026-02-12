let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartCount.innerText = cart.length;
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeItem(${index})">X</button></p>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.innerText = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    document.getElementById("cart-panel").classList.toggle("active");
}
