// fetchData();
// async function fetchData() {
//     try{
//         const cardName = document.getElementById("fetchproduct")

//         const response=await fetch('https://dummyjson.com/products')

//         const data=await response.json();
//         console.log(data.products);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// 





const products = [
    {
        name: "Penquin",
        description: "Babique Penguin Plush and Soft Toy",
        price: 250,
        image: "picture.6.png"
    },
    {
        name: "Vehicle",
        description: "Off Road Die Cast, Opening Doors, Vehicle Toy Car",
        price: 1000,
        image: "picture5.jpeg"
    },
    {
        name: "Teddy Bear",
        description: "Hug 'n' Feel Soft Toys Soft Toy Teddy Bear",
        price: 500,
        image: "picture3.jpeg"
    },
    {
        name: "Coffee Mug",
        description: "Designer Ceramic Coffee Mugs",
        price: 70,
        image: "picture10.jpeg"
    }
];


function fetchData() {
    
    const productName = document.getElementById('fetchproduct').value.trim().toLowerCase();
    const fetchedProduct = products.find(product => product.name.toLowerCase() === productName);

    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const fetchedProductDiv = document.getElementById('fetched-product');


    if (fetchedProduct) {
        productTitle.textContent = fetchedProduct.name;
        productPrice.textContent = `Price: ${fetchedProduct.price}`;
        fetchedProductDiv.style.display = 'block'; 
    } else {
        productTitle.textContent = "Product not found!";
        productPrice.textContent = "";
        fetchedProductDiv.style.display = 'block'; 
    }
}
