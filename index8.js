//1
async function getProductTitle(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();
        products.forEach((product)=> {
        document.write("<h1>" + product.title + "</h1>");
    });
    }catch(error){
        console.log(error);
    }
}

getProductTitle();

//2
async function getProductId(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();
        products.forEach((product)=>{
            document.write("<h2>" + product.id +"\t"+ product.title + "</h2>");
        })
    }catch(error){
        console.log(error);
    }
};
getProductId();

//3
async function productTitle(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            console.log(product.title.slice(0,30));
        })
    }catch(error){
        console.log(error);
    }
}

productTitle();

//4
async function getDiscription() {
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();
        products.forEach((product)=>{
            console.log(product.description.slice(0,100));
        });
    }catch(error){
        console.log(error);
    }
}

getDiscription();

//5
async function getImage(){
    try{

        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            document.write("<div><img src='"+ product.image +"' width = '150' height = '150'></div>");
        })
    }catch(error){
        console.log(error);
    }
}

getImage();

//6
async function singleDiv(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
    var products = await response.json();

    products.forEach((product)=>{
        document.write(
            "<div>"+ 
            "<h2>" + product.title + "</h2>" +
            "<p>" + product.description + "</p>" +
            "<img src = '" + product.image + "'>" +
            "</div>"
        );
    })
    }catch(error){
        console.log(error);
    }
  
}

singleDiv();

//7
async function price(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();
        products.forEach((product)=>{
            document.write("<p>" + product.price + "</p>");
        });
    }catch(error){
        console.log(error);
    }
}

price();

//8
async function category(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
       var products = await response.json();

        products.forEach((product)=>{
        document.write("<h3>" + product.category + "</h3>");
    })
    }catch(error){
        console.log(error);
    }
    
}

category();

//9
async function upperCase() {
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            console.log(product.title.toUpperCase());
        })
    }catch(error){
        console.log(error);
    }
}

upperCase();

//10
async function countLength() {
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            console.log(product.title.length);
        })
    }catch(error){
        console.log(error);
    }
}

countLength();

//11
async function firstFive(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.slice(0,5).forEach((product)=>{
            console.log(product.id);
            console.log(product.title);
            console.log(product.price);
        })
    }catch(error){
        console.log(error);
    }
}

firstFive();

//12
async function display() {
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            console.log(product.id);
            console.log(product.title);
            console.log(product.price);
    })
    }catch(error){
        console.log(error);
    }  
}

display();

//13
async function img(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            document.write("<img src='" + product.image + "'width='200' height='200'>");
        })
    }catch(error){
        console.log(error);
    }
}

img();

//14
async function separateDiv() {
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            document.write(`
            <div class = "card">
                <img src = "${product.image}" width="200" height="200">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>price: $${product.price}</p>
            </div>
            `);
        });
    }catch(error){
        console.log(error);
    }
}

separateDiv();

//15
async function titleDes(){
    try{
        var response = await fetch("https://fakestoreapi.com/products");
        var products = await response.json();

        products.forEach((product)=>{
            document.write(`
                <div class="cardd">
                <h3>${product.title}</h3>
                <p>${product.description.slice(0,50)}</p>
                </div>
                `);
        })
    }catch(error){
        console.log(error);
    }
}

titleDes();

//16
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
        return response.json();
    })
    .then((products)=>{
        products.forEach((product)=>{
            document.write("<h1>" + product.title + "</h1>")
            console.log(product.title);
        })
    })
    .catch((error)=>{
        console.log(error);
    });

//17
fetch("https://fakestoreapi.com/products")
.then((response)=>{
    return response.json();
})
.then((products)=>{
    products.forEach((product)=>{
        document.write(`
            <div class="cc">
                <h3>${product.title}</h3>
                <p>${product.category}</p>
            </div>
        `)
    })
})
.catch((error)=>{
    console.log(error);
})
.finally()

//18
fetch("https://fakestoreapi.com/products")
.then((response)=>{
    return response.json();
})
.then((products)=>{
    document.querySelector(".api").innerHTML =
    "<h1>API data loaded successfully! </h1>";
})
.catch((error)=>{
    console.log(error);
});

//19
document.querySelector(".api").innerHTML = "Loading..";

fetch("https://fakestoreapi.com/products")
.then((response)=>{
    return response.json();
})
.then((products)=>{
    document.querySelector(".api").innerHTML = 
    "<h1> API data loaded successfully </h1>";
})
.catch((error)=>{
    console.log(error);
})

//20
fetch("https://fakestoreapi.com/products")
.then((response)=>{
    return response.json();
})
.then((products)=>{
    document.querySelector(".api").innerHTML = 
    "<h1> API data loaded successfully </h1>";
})
.catch((error)=>{
    document.querySelector(".api").innerHTML = 
    "<h1> Failed to load API data </h1>";
})
.finally(()=>{
    document.querySelector(".api").innerHTML +=
    "<h1> API request completed </h1>";
});
