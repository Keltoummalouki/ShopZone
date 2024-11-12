const productContainer = document.getElementById('products'); 
let products;
async function fetchProducts() {

        const response = await fetch('http://localhost:3000/api/products');

         products = await response.json(); 
        //  console.log(products);
        let originalProducts = await products;
        
        displayProducts(products);
       return products;
    
}

function displayProducts(products) {
   

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = ``

        productCard.classList.add('flex', 'flex-col', 'items-center', 'space-y-4', 'bg-white', 'shadow-lg','m-3', 'p-3','w-auto');
    
        const imageUrl = product.image;

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${product.name}" class="h-24">
            <h3 class="text-xl font-semibold text-center">${product.name}</h3>
            <p class="text-gray-500 text-center">${product.category}</p>
            <p class="text-lg text-green-500 text-center">$${product.price.toFixed(2)}</p>
            
            <div class="flex space-x-4">
                <button style="background-color: #48bb78; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Add to Cart
                </button>
                <button style="background-color: #4299e1; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                    Add to Favorites
                </button>
            </div>
        `;
        

        productContainer.appendChild(productCard);
    });
}

async function displayCategorie(category) {
    const data = await fetchProducts();
    let filtedcategories = data.filter(product => product.category === category);

    console.log(filtedcategories);
}
document.addEventListener('DOMContentLoaded', fetchProducts);

////////dropdownlist//////
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");

dropdownButton.addEventListener("click", function(event) {

  event.stopPropagation();
  

  dropdownMenu.classList.toggle("hidden");

  dropdownIcon.classList.toggle("rotate-180");
});

// -------------------function de search par nom------------------------------------
function searchByName() {

    const recherche = document.getElementById('search').value.toLowerCase();
    const filter = products.filter(prd => prd.name.toLowerCase().includes(recherche));
    productContainer.innerHTML = '';
    filter.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = ``

        productCard.classList.add('flex', 'flex-col', 'items-center', 'space-y-4', 'bg-white', 'shadow-lg','m-3', 'p-3','w-auto');
    
        const imageUrl = product.image;

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${product.name}" class="h-24">
            <h3 class="text-xl font-semibold text-center">${product.name}</h3>
            <p class="text-gray-500 text-center">${product.category}</p>
            <p class="text-lg text-green-500 text-center">$${product.price.toFixed(2)}</p>
            
            <div class="flex space-x-4">
                <button style="background-color: #48bb78; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Add to Cart
                </button>
                <button style="background-color: #4299e1; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                    Add to Favorites
                </button>
            </div>
        `;
        

        productContainer.appendChild(productCard);
    });
}




