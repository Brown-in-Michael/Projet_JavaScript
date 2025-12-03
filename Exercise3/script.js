// - Créer une variable pour le nom de la boutique

const shopName = "Baby Hounds";
console.log(shopName);

// - Créer une variable pour la ville

const city = "London";
console.log(city);

// - Créer une variable booléenne pour savoir si la boutique est ouverte

let isOpen = true;
// - Créer une variable pour le nombre de produits

let productAmount = 10;
// - Créer une variable pour le slogan

let slogan = "Cute baby racing dog's for you";
// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)


// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)
if (isOpen = false) {
    console.log("It's Open");  
} 
else {
    console.log("It's Closed");
}
// Neauvaté exercise 2
// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let welcomeMessage = "Welcome to " + shopName;


// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let intro = (`${welcomeMessage} this store`);
// - Calculer la longueur du slogan
let calculate = (slogan.length);

// - Créer une version en majuscules du slogan
console.log(slogan.toUpperCase());

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let modified = slogan.replace("baby", "juvenile")
console.log(modified);

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log(welcomeMessage, welcomeMessage.length, slogan, calculate);
console.log(welcomeMessage.toUpperCase(), slogan.toUpperCase());
console.log(modified);

// - Créer une variable contenant un prix HT d’exemple
let HTprice = 9.99;

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const TVA = 0.2;

// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let TTC = HTprice + (HTprice * TVA);
// - Afficher le prix HT et le prix TTC dans la console
console.log("Price HT is:", HTprice);
console.log("Full price TTC is", TTC);


// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let salesCount = 0;


// - Simuler une nouvelle vente en augmentant ce compteur
salesCount ++;
salesCount ++;
//   (indice : utiliser l’opérateur pour ajouter 1)
// - Afficher la nouvelle valeur du compteur dans la console
console.log("Nommbre de ventes:", salesCount);
