
const panier = document.querySelectorAll("#panier")[0];
const shippingValue = 9.00
const coin = "$" 


//////////////////////////////////////

const formatPrice = (price, coin) => `${price.toFixed(2)} ${coin}`

const remove = (productId) => {
    let products = JSON.parse(localStorage.getItem("addedProducts"));
    products = products.filter(prd => prd.id !== productId);
    localStorage.setItem("addedProducts", JSON.stringify(products))
    document.getElementById(`panier-product-${productId}`).remove()
}

const updateProductQuantity = (productId, value) => {
    let products = JSON.parse(localStorage.getItem("addedProducts"));
    const quantityElement = document.getElementById(`affichageQuantity-${productId}`);
    const quantityPriceElement = document.getElementById(`affichageQuantityPrice-${productId}`);
    const subTotalElement = document.getElementById("CheckoutSubTotal")
    const totalElement = document.getElementById("CheckoutTotal")
    const product = products.find(prd => prd.id === productId);
    let subTotal = 0
    if (product.quantity + value >= 1) {
        quantityElement.textContent = product.quantity + value;
        quantityPriceElement.textContent = formatPrice(product.prixNew * (product.quantity + value), coin)

        products = products.map(prd => {
            if (prd.id === productId) {
                subTotal += prd.prixNew * (prd.quantity + value)
                return { ...prd, quantity: prd.quantity + value }
            }
            
            subTotal += prd.prixNew * prd.quantity
            return prd;
        })

        totalElement.textContent = formatPrice(subTotal + shippingValue, coin)
        subTotalElement.textContent = formatPrice(subTotal, coin)
        localStorage.setItem("addedProducts", JSON.stringify(products))
    }
}

const displayCheckoutProducts = () => {
    const products = JSON.parse(localStorage.getItem("addedProducts"));
    panier.innerHTML = ''
    products?.forEach((product) => {
        panier.innerHTML += `
            <div id="panier-product-${product.id}" class="relative flex flex-col rounded-lg bg-white sm:flex-row" >
                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="${product.image}"
                    alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">${product.nom_product}</span>
                    <span class="float-right text-gray-400">${product.prixNew.toFixed(2)} $</span>
                    <p id="affichageQuantityPrice-${product.id}"  class="text-lg font-bold">${(product.prixNew * product.quantity).toFixed(2)} $</p>
                </div>
                <div class="sm:order-1">
                    <div class="mx-auto mt-3 flex h-8 items-stretch text-gray-600">
                        <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onclick="updateProductQuantity(${product.id},-1)">-</button>
                        <div id="affichageQuantity-${product.id}" class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition" >
                            ${product.quantity}
                        </div>
                        <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onclick="updateProductQuantity(${product.id},1)">+</button>
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 flex sm:bottom-0 sm:top-auto ">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900" onclick="remove(${product.id})">
                        <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    });
}

displayCheckoutProducts()

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("addedProducts"));
    const subTotalElement = document.getElementById("CheckoutSubTotal")
    const totalElement = document.getElementById("CheckoutTotal")
    const shippingElement = document.getElementById("CheckoutShipping")
    shippingElement.textContent = formatPrice(shippingValue, coin)
    let subTotal = 0

    products?.forEach(prd => {
        subTotal += prd.prixNew * prd.quantity
    })

    subTotalElement.textContent = formatPrice(subTotal, coin)
    totalElement.textContent = formatPrice(subTotal + shippingValue, coin)
});
