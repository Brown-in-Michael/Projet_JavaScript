// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)

let featuredProductName = "Nike NOCTA";
let featuredProductPriceHT = 375;
let featuredProductDescription = "Great for winter";
let featuredProductImage = document.createElement("img");
featuredProductImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FDOkGaIqDWMT%2F&psig=AOvVaw1_uWLK_uNhDiPJlPO2kuSu&ust=1764778373125000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIighoGmn5EDFQAAAAAdAAAAABAE";


function calculatePriceTTC(priceHT) {
    const TVA = 0.2;
    let PriceTTC = priceHT + (priceHT * TVA);

    return PriceTTC;
}

function formatPrice(price) {
    let rounded = price.toFixed(2);
    let french = rounded.replace(".", ",") + " €";
    return french;
}

let firstPrice = 375;
let firstCalculation = calculatePriceTTC(firstPrice);
let formattedPrice = formatPrice(firstCalculation);




// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
let productList = document.getElementById("product-list");
// - Définir une fonction (createFeaturedProductCard()) qui :
function createFeaturedProductCard() {


    //     • crée un conteneur pour la carte  
    //       (indice : il existe une méthode du DOM pour créer un élément HTML)
    let cardContainer = document.createElement("article");
    //     • crée une image :
    //         - lui donner la source de l'image
    let image = document.createElement("img");
    image.src = "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/b5be2707-4728-4d6f-8d4b-e59bd63f37e2/M+NK+TCH+TF+BOREAS+OH+PANT.png";
    //       (indice : pensez aux propriétés des balises <img>)
    //     • crée un titre et lui mettre le nom du produit  
    let productTitle = document.createElement("h3");
    //       (indice : une propriété permet d’écrire du texte dans un élément)
    //     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent

    // calculatePriceTTC(priceHT);
    //       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
    //     • formate ce prix TTC avec la fonction prévue pour ça
    // formatprice(price);
    
    
    //     • crée un paragraphe pour afficher le prix TTC
    let para = document.createElement("p");
    para.textContent = "This is the full price: " + firstCalculation + " €";
    //     • crée un autre paragraphe pour la description
    let paraDescription = document.createElement("p");
    paraDescription.textContent = "La Nike Tech Boreas est une veste technique conçue pour offrir un équilibre idéal entre chaleur, légèreté et confort. Inspirée de l’esthétique moderne des collections Nike Tech, elle combine des lignes épurées, des matériaux innovants et une coupe structurée pour un style à la fois sportif et urbain..."
    //     • assemble tous les éléments dans le conteneur
    //       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
    productList.appendChild(cardContainer);
    cardContainer.classList.add("product-card");
    cardContainer.appendChild(image);
    image.classList.add("product-image");
    cardContainer.appendChild(productTitle);
    productTitle.classList.add("product-title");
    cardContainer.appendChild(para);
    para.classList.add("product-name");
    cardContainer.appendChild(paraDescription);
    cardContainer.classList.add("paraDecription");
    //     • retourne ce conteneur
    return cardContainer;
}
// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
productList.innerHTML = "";
// - Appeler la fonction pour créer la carte
createFeaturedProductCard();
// - Ajouter le résultat dans la section prévue

//   (indice : même méthode que pour assembler les éléments dans la carte)



// EXERCISE 4

// let section = document.getElementById("cardContainer");
// let nom = "BROWN";
// let prénom = "Michael";
// let age = 20;
// let Title = document.createElement("h2");
// Title.textContent = nom + " " + prénom;
// let para = document.createElement("p");
// para.textContent = age;
// para.style.color = "blue";
// cardContainer.appendChild(Title);
// cardContainer.appendChild(para);


// EXERCISE 4

