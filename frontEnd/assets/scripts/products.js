
async function fetchProducts() {


        const response = await fetch('http://localhost:3000/api/products');
        
       


        const products = await response.json();  
      
        displayProducts(products);
    
}


function displayProducts(products) {
    const productContainer = document.getElementById('products'); 

    products.forEach(product => {
        const productCard = document.createElement('div');
        

        productCard.classList.add('flex', 'flex-col', 'items-center', 'space-y-4', 'bg-white', 'shadow-lg','m-3', 'p-3','w-auto');
        



        const imageUrl = product.image;


        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${product.name}" class="h-24">
            <h3 class="text-xl font-semibold text-center">${product.name}</h3>
            <p class="text-gray-500 text-center">${product.category}</p>
            <p class="text-lg text-green-500 text-center">$${product.price.toFixed(2)}</p>
            
            <!-- الـ div الخاص بالأزرار فقط -->
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








document.addEventListener('DOMContentLoaded', fetchProducts);
