const productlistContainer = document.querySelector(".product_list_container");

fetch("https://kea-alt-del.dk/t7/api/products").then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(productlistArr) {
  productlistContainer.innerHTML = "";
  productlistArr.forEach((product) => {
    productlistContainer.innerHTML += `<article class="product_info">
          <a href="produkt.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
            <div class="sale-box">
              <p>- 20%</p>
            </div>
            <div class="sold-text">
              <p>UDSOLGT</p>
            </div>
          <p class="product-name">${product.productdisplayname}</p></a>
          <div class="price">
            <p class="sale-price">DKK 591,20</p>
            <p class="old-price">DKK ${product.price}</p>
          </div>
        </article>`;
  });
}
