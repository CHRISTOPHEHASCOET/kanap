// déclaration des variable : name, price, imageUrl, description, color, altText

let name, price, imageUrl, description, colors, altTxt;

// let quantityNumber = document.getElementById("quantity");

//récupération de l'id du produit afficher

const params = window.location.href;
const url = new URL(params);
const id = url.searchParams.get("id");
console.log(id);

//récupération des produit de l'API

fetch("http://localhost:3000/api/products/" + id)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    name = data.name;
    price = data.price;
    imageUrl = data.imageUrl;
    description = data.description;
    colors = data.colors;
    altTxt = data.altTxt;
    post();
  });

//insération de sproduits et ses détails.

function post() {
  // insertion de l'image
  let itemImg = document.createElement("img");
  const parentImg = document.querySelector(".item__img");
  parentImg.appendChild(itemImg);
  itemImg.src = imageUrl;
  itemImg.alt = name;

  // insertion du titre
  let itemtitle = document.getElementById("title");
  itemtitle.textContent = name;

  // insertion du prix
  let itemPrice = document.getElementById("price");
  itemPrice.textContent = price;

  // insertion de la descrition
  let itemDescription = document.getElementById("description");
  itemDescription.textContent = description;

  // insertion de la couleur

  for (let itemColors of colors) {
    let apparence = document.createElement("option");
    const parentColors = document.querySelector("#colors");
    parentColors.append(apparence);
    apparence.value = itemColors;
    apparence.innerHTML = itemColors;
  }
}

//ajoutez des produits au panier
let produits = [];
const addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", function () {
  console.log("produit");
  let produit = {
    produit: id,
    color: colors,
    quantity: quantity,
  };
  const localStorageContent = localStorage.getItem("produit");
  console.log(localStorageContent);
  produits.push(produit);
  let produitLocalStorage = JSON.stringify(produits);
  localStorage.setItem("produit", produitLocalStorage);
});





// let produitLocalStorage = JSON.parse(localStorage.getItem("produits"));
// if (produitLocalStorage) {
//   const resultFind = produitLocalStorage.find(
//     (article) => article.id == id && article.color == colors
//   );
// } else {
//   resultFind === -1;
//   produitLocalStorage.push({ id: id, quantity: quantity, color: colors });
//   localStorage.setItem("produits", JSON.stringify(produitLocalStorage));
// }

// let id = produits.id;
//  let quantity = quantity;
//  let color = colors;
//  const isItemRepeated = produitLocalStorage.findIndex(
//  (element) => element.id == id && element.color == colors
//  );
//  if (isItemRepeated === -1) {
//   produitLocalStorage.push({ id: id, quantity: quantity, color: color });
//    localStorage.setItem("prodruits", JSON.stringify(produitLocalStorage));
//  } else {
//   produitLocalStorage[isItemRepeated].quantity += parseInt(quantity);
//  localStorage.setItem("produits", JSON.stringify(produitLocalStorage));
//  }
