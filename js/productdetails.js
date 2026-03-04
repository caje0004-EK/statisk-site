const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const productContainer = document.querySelector("#productdetails");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `<section class="breadcrumbs">
        <ul>
          <li><a href="kategorier.html">Kategorier</a></li>
          <li><a href="produktliste.html">${data.category}</a></li>
          <li><a href="#">${data.productdisplayname}</a></li>
        </ul>
      </section>
      <section class="product_container">
        <article>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="" />
        </article>
        <article class="product-info">
          <h2>${data.productdisplayname}</h2>
          <section>
            <div class="price">
              <p class="sale-price">DKK 719,20</p>
              <p class="old-price">DKK ${data.price}</p>
            </div>
            <p>Farve: ${data.basecolour}</p>
            <p>Type: ${data.articletype}</p>
            <p>Kategori: ${data.category}</p>
          </section>
          <section class="purchase">
            <form>
              <fieldset>
                <legend>
                  <h4>Vælg størrelse</h4>
                </legend>
                <div>
                  <label>
                    <input type="radio" name="size" id="S" />
                    S
                  </label>
                  <label>
                    <input type="radio" name="size" id="M" />
                    M
                  </label>
                  <label>
                    <input type="radio" name="size" id="L" />
                    L
                  </label>
                  <label>
                    <input type="radio" name="size" id="XL" />
                    XL
                  </label>
                </div>
              </fieldset>
              <div>
                <button>Tilføj til kurv</button>
              </div>
            </form>
          </section>`;
  });
