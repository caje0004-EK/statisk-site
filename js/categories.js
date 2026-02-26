const categoryContainer = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories") // laver request til adresse på database //
  .then((response) => response.json()) // data konvertes til json //
  .then((data) => {
    // henter data fra array, og tilføjer det i brugergrænsefladen //
    data.forEach((category) => {
      categoryContainer.innerHTML += `<a href="produktliste.html">${category.category}</a>`;
    });
    console.log(data);
  });
