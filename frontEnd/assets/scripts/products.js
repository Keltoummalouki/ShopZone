
const productContainer = document.getElementById('products'); 
let products;

const productContainer = document.getElementById('products');
let products = [];
let response;
let products =[];
const productContainer = document.getElementById('products');
let response;

async function fetchProducts() {

    response = await fetch('http://localhost:5000/api/products');
    products = await response.json();
    displayProducts(products);
    filterstock(products);

        response = await fetch('http://localhost:5000/api/products');


         products = await response.json(); 
=======
        products = await response.json(); 

        //  console.log(products);
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

// function displayProducts(products) {

//     products.forEach(product => {
//         const productCard = document.createElement('div');


//         productCard.classList.add('flex', 'flex-col', 'items-center', 'space-y-4', 'bg-white', 'shadow-lg', 'm-3', 'p-3', 'w-auto');




//         const imageUrl = product.image;


//         productCard.innerHTML = `
//             <img src="${imageUrl}" alt="${product.name}" class="h-24">
//             <h3 class="text-xl font-semibold text-center">${product.name}</h3>
//             <p class="text-gray-500 text-center">${product.category}</p>
//             <p class="text-lg text-green-500 text-center">$${product.price.toFixed(2)}</p>

            
//             <div class="flex space-x-4">
//                 <button style="background-color: #48bb78; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
//                     Add to Cart
//                 </button>
//                 <button style="background-color: #4299e1; color: white;" class="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
//                     Add to Favorites
//                 </button>
//             </div>
//         `;


//         productContainer.appendChild(productCard);
//     });
// }

 displayProducts = (products) => {
    productContainer.innerHTML = ''
    products.forEach((product) => {
        productContainer.innerHTML += `
            <div
                class="relative mt-10 ml-2 mr-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <div class="w-full h-full" style="background-color: #d6d5d1;">
                        <img class="object-cover h-full w-full" src="${product.image}" alt="product image" />
                    </div>
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-${product.sale === "Sale" ? "black" : "white"} px-2 text-center text-sm font-medium text-${product.sale === "Sale" ? "white" : "black"}">
                        ${product.sale} <i class="fa-solid fa-fire-flame-curved"></i>
                    </span>
                </a>
                <div class="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl tracking-tight text-slate-900">${product.nom_product}</h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900">${product.prixNew}$</span>
                            <span class="text-sm text-slate-900 line-through">${product.prix}</span>
                        </p>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
                        </div>
                    </div>

                    
                    <a href="#"
                        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 btnAdd" onclick="add(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                </div>
function displayProducts (products)  {
    productContainer.innerHTML = ''
    products.forEach((product) => {
        productContainer.innerHTML += `
            <div
                class="relative mt-10 ml-2 mr-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <div class="w-full h-full" style="background-color: #d6d5d1;">
                        <img class="object-cover h-full w-full" src="${product.image}" alt="product image" />
                    </div>
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-${product.sale === "Sale" ? "black" : "white"} px-2 text-center text-sm font-medium text-${product.sale === "Sale" ? "white" : "black"}">
                        ${product.sale} <i class="fa-solid fa-fire-flame-curved"></i>
                    </span>
                </a>
                <div class="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl tracking-tight text-slate-900">${product.name}</h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900">${product.price}$</span>
                            <span class="text-sm text-slate-900 line-through">${product.prix}</span>
                        </p>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
                        </div>
                    </div>

                    
                    <a href="#"
                        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 btnAdd" onclick="add(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                </div>
            </div>
        `;
        
    });
};


function displayCategorie(category) {
    let filtedcategories = products.filter(product => product.category === category);

    productContainer.innerHTML = ''
    filtedcategories.forEach((filtedcategories) => {
        const productCard = document.createElement('div');
        productCard.innerHTML += `
            <div
                class="relative mt-10 ml-2 mr-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <div class="w-full h-full" style="background-color: #d6d5d1;">
                        <img class="object-cover h-full w-full" src="${filtedcategories.image}" alt="product image" />
                    </div>
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-${filtedcategories.sale === "Sale" ? "black" : "white"} px-2 text-center text-sm font-medium text-${filtedcategories.sale === "Sale" ? "white" : "black"}">
                        ${filtedcategories.sale} <i class="fa-solid fa-fire-flame-curved"></i>
                    </span>
                </a>
                <div class="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl tracking-tight text-slate-900">${filtedcategories.nom_product}</h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900">${filtedcategories.prixNew}$</span>
                            <span class="text-sm text-slate-900 line-through">${filtedcategories.prix}</span>
                        </p>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="h-5 w-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
                        </div>
                    </div>

                    
                    <a href="#"
                        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 btnAdd" onclick="add(${filtedcategories.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

}

async function displayCategorie(category) {
    const data = await fetchProducts();
    let filtedcategories = data.filter(product => product.category === category);

};


}

document.addEventListener('DOMContentLoaded', fetchProducts);

////////dropdownlist//////
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");

dropdownButton.addEventListener("click", function (event) {

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

function filterByPrice(maxPrice) {
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    productContainer.innerHTML = '';
    displayProducts(filteredProducts);
    
}



    function filterInStock() { 
        let filter = products.filter(product => product.stock === true)
        displayProducts(filter);
    }
    
    function filterOutStock() {
        let filter = products.filter(product => product.stock === false)
        displayProducts(filter);
    }

