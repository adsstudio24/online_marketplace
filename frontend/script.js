async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    await fetch('http://localhost:5000/product', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price })
    });

    loadProducts();
}

async function loadProducts() {
    const response = await fetch('http://localhost:5000/products');
    const products = await response.json();
    document.getElementById("products").innerHTML = products.map(p => `<li>${p.name} - $${p.price}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", loadProducts);
