let boissons = {"Bièraubeurre" : "3,00€",
    "Jus de citrouille" : "3,00€", 
    "Diabolo" : "2,00€",
    "Coca Cola, Orangina, Ice Tea..." : "2,00€"};

let cocktails = {"Venin de Basilic (Mojito)" : "8,00€",
    "La tiare de Rowena Serdaigle (Adios Motherfucker)" : "9,00€",
    "Sang de bourbe (Bloody Mary)" : "9,00€"};

let plats = {"Baguette de Sureau (Baguette fourée tomates et chorizos" : "14,00€",
    "Cuisse d'hyppogriffe rôtie aves ses pattes (cuisse de poulet rôtie et frites de pomme de terre)" : "16,00€",
    "Expecto Patronum (Soupe de champignons et viande au choix)" : "14,00€",
    "Serpents en lamelles (Salade à composer soi-même)" : "12,00€"};

let desserts = {"La chambre des secrets (Pavlova menthe et basilic)" : "9,OO€",
    "Mandragore caramélisée (pomme d'amour et 2 boules de glace vanille)" : "7,OO€",
    "Crême brulée vanille et badiane" : "10,00€",
    "Le Vif d'or (choux garnis à la crême vanille)" : "8,OO€"};

let boissonsdiv = document.querySelector('.boissons');

let ulboissons = document.createElement('ul');

for (let [boisson, prixboissons] of Object.entries(boissons)) {
    let liboissons = document.createElement('li');
    liboissons.textContent = `${boisson} - ${prixboissons}`;
    ulboissons.appendChild(liboissons);
}

boissonsdiv.appendChild(ulboissons);

let cocktailsdiv = document.querySelector('.cocktails');

let ulcocktails = document.createElement('ul');

for (let [cocktail, prixcocktails] of Object.entries(cocktails)) {
    let licocktails = document.createElement('li');
    licocktails.textContent = `${cocktail} - ${prixcocktails}`;
    ulcocktails.appendChild(licocktails);
}

cocktailsdiv.appendChild(ulcocktails);

let platsdiv = document.querySelector('.plats');

let ulplats = document.createElement('ul');

for (let [plat, prixplats] of Object.entries(plats)) {
    let liplats = document.createElement('li');
    liplats.textContent = `${plat} - ${prixplats}`;
    ulplats.appendChild(liplats);
}

platsdiv.appendChild(ulplats);

let dessertsdiv = document.querySelector('.desserts');

let uldesserts = document.createElement('ul');

for (let [dessert, prixdesserts] of Object.entries(desserts)) {
    let lidesserts = document.createElement('li');
    lidesserts.textContent = `${dessert} - ${prixdesserts}`;
    uldesserts.appendChild(lidesserts);
}

dessertsdiv.appendChild(uldesserts);