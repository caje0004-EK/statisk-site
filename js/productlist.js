const productlistContainer = document.querySelector(".product_list_container");
const productlistHeader = document.querySelector("#productlist-header");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=40`).then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(productlistArr) {
  productlistHeader.innerHTML = `<h2>${category}</h2>`;
  productlistArr.forEach((product) => {
    productlistContainer.innerHTML += `<article class="product_info${product.soldout ? " soldout" : ""}${product.discount ? " sale" : ""}">
          <a href="produkt.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
            <div class="sale-box">
              <p>- ${product.discount}%</p>
            </div>
            <div class="sold-text">
              <p>UDSOLGT</p>
            </div>
          </a>
          <a href="produkt.html?id=${product.id}"><p class="product-name">${product.productdisplayname}</p></a>
          <div class="price">
            <p class="sale-price">DKK 591,20</p>
            <p class="old-price">DKK ${product.price}</p>
          </div>
        </article>`;
  });
}
