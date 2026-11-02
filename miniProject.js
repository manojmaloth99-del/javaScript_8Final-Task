fetch("https://fakestoreapi.com/products")
.then((response)=>{
    if (!response.ok) {
        throw new Error("API request failed!");
    }
    return response.json();
})
.then((products)=>{
    products.forEach((product)=>{
        document.querySelector(".container").innerHTML +=`
            <div class="card">
                <h3>Product ID: ${product.id}</h3>
                <h2>${product.title.slice(0, 50)}</h2>
                <h3>$ ${product.price}</h3>
                <p>${product.description.slice(0, 100)}</p>
                <img src="${product.image}" alt="${product.title}">
            </div>
        `;
    });
})
.catch((error)=>{
    document.querySelector(".api").innerHTML = 
    `<p class="error">${error.message}</p>`;
})
.finally(()=>{
    document.querySelector(".api").innerHTML +=
    `<p class="success">API request completed</p>`;
});
