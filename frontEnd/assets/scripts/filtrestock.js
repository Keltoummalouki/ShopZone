

  const inStockCheckbox = document.getElementById("inStock");
  const outStockCheckbox = document.getElementById("outStock");
  const productList = document.getElementById("productList");

  function filterProducts() {
    const inStock = inStockCheckbox.checked;
    const outStock = outStockCheckbox.checked;
    const products = productList.getElementsByClassName("product");
  }
