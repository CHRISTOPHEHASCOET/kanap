// inséré des produits dans la page d'accueil.

fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    const product1 = data[0];
    console.log("product1", product1);
    for (let i = 0; i < data.length; i++) {
      const produit = `<a href="./product.html?id=${data[i]._id}"><article><img src="${data[i].imageUrl}" alt="${data[i].altTxt}"><h3 class="productName">${data[i].name}</h3><p class="productDescription">${data[i].description}</p></article></a>`;
      document.getElementById("items").innerHTML += produit;
    }
    // console.log(data);
  });



