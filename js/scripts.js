let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = "Total: $" + total;
}

function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("active");
}
