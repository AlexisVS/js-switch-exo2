// - ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// - ## Exo 2
//     ## La même chose sauf qu'on incrémente par deux

// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.

// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

// - ## Exo 5
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

// - ## Exo 6
//     ##  Voici un tableau : 
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.


let multiplicateur = 5;
for (let i = 0; i <= 9; i++) {
    console.log(`5 x ${i} = ` + multiplicateur * i);
}

for (let j = 0; j <= 9; j += 2) {
    console.log(`5 x ${j} = ` + multiplicateur * j);
}

for (let k = 20; k >= 0; k -= 2) {
    console.log(k);
}

let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];
let longNoms = [];

eleves.forEach(element => {
    if (element.length > 5) {
        longNoms.push(element)
    }
});
console.log(longNoms);



let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grosseSommes = [];

for (let l = 0; l < sommes.length; l++) {
    if (sommes[l] > 60) {
        grosseSommes.push(sommes[l]);
        sommes.splice(sommes.indexOf(sommes[l]), 1);
        l--;
    }
}
console.log(sommes);
console.log(grosseSommes);


let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let typeString = [], typeNumber = [], typeObject = [], typeAutre = [];

donnees.forEach(element => {
    switch (typeof element) {
        case "string":
            typeString.push(element);
            break;
        case "number":
            typeNumber.push(element);
            break;
        case "object":
            typeObject.push(element);
            break;
        default:
            typeAutre.push(element);
            break;  
    }
});
donnees = []
console.log(typeAutre);

