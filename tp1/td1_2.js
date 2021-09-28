//Les types en JS


function typeVariable(x) {
    console.log("le type de la variable est : ", typeof x);
    var x = 'blabla';

}
//typeVariable(x);

let b = false;
let n = 0;
let s = '0';
let tab = [];
let o = {};

function egalite(variable1, variable2) {
    console.log(variable1 == variable2);
}

function egaliteParfaite(variable1, variable2) {
    console.log(variable1 === variable2);
}

// Les chaînes

function chainesEnMajuscule() {
    while (true) {
        let chaine = prompt();
        console.log("résultat : ", chaine);
        if (chaine === chaine.toUpperCase()) {
            console.log("la chaine est entièrement en majuscule");
            break;
        } else {
            console.log("La chaine n'est pas entièrement en majuscule");
        }
    }
}

function creerUnCarac() {
    let carac = parseInt(65 + Math.random() * (123 - 65));
    return String.fromCharCode(carac);
}

function creerUnCaracV2() {
    do {
        var carac = parseInt(65 + Math.random() * (123 - 65));

    } while (carac > 90 && carac < 97 && carac !== 123)
    return String.fromCharCode(carac);
}

function genererUneChaine(taille) {
    let chaine = ""
    for (i = 0; i < taille; i++) {
        chaine += creerUnCaracV2();
    }
    return chaine;
}

function genererUneChaineEnMajuscule(tailleChaineCarac) {

    let nombreIteration = 0;
    while (true) {
        let chaine = genererUneChaine(tailleChaineCarac);
        console.log(chaine);
        if (chaine === chaine.toUpperCase()) {
            console.log("le nombre d'itération est : ", nombreIteration);
            break;
        } else {
            nombreIteration++;
        }
    }
}

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genererUneChaineDeVoyelle() {
    let voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    let longueurDeLaChaine = entierAleatoire(1, 10);
    let chaine = "";

    for (i = 0; i < longueurDeLaChaine; i++) {
        let voyelleAChoisir = entierAleatoire(0, 5);
        chaine += voyelle[voyelleAChoisir]
    }
    console.log(chaine);
}

function inscrireNomEtPrenom() {
    let nom = prompt("Ecrivez votre nom");
    let prenom = prompt("Ecrivez votre prénom");
    let newPrenom = "";


    nom = nom.toUpperCase();

    for (i = 0; i < prenom.length; i++) {
        console.log(prenom[i]);
        if (i === 0) {
            newPrenom += prenom[i].toUpperCase();
        } else {
            newPrenom += prenom[i].toLowerCase();
        }
    }
    console.log("Vous vous appelez : ", nom, newPrenom);
}

function cryptageChaine(text) {
    let newText = "";
    for (i = 0; i < text.length; i++) {
        if (text[i] === "a" || text[i] === 'A') {
            newText += "4";
        }
        else if (text[i] === "e" || text[i] === 'E') {
            newText += "3";
        }
        else if (text[i] === "g" || text[i] === 'G') {
            newText += "6";
        }
        else if (text[i] === "i" || text[i] === 'I') {
            newText += "1";
        }
        else if (text[i] === "o" || text[i] === 'O') {
            newText += "0";
        }
        else if (text[i] === "s" || text[i] === 'S') {
            newText += "5";
        }
        else if (text[i] === "z" || text[i] === 'Z') {
            newText += "2";
        } else {
            newText += text[i];
        }
    }

    console.log(newText);

}

function jazzBundle(number) {
    for (i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Jazz Bundle");
        } else if (i % 3 === 0) {
            console.log("Jazz");
        } else if (i % 5 === 0) {
            console.log("Bundle");
        } else {
            console.log(i);
        }
    }
}

function jazzBundleV2(number) {

    for (i = 1; i <= number; i++) {
        let mot;
        if (i % 3 === 0 && i % 5 === 0) {
            mot = "Jazz Bundle";
        } else if (i % 3 === 0) {
            mot = "Jazz";
        } else if (i % 5 === 0) {
            mot = "Bundle";
        } else {
            mot = i;
        }
        console.log(mot);
    }
}

// Les tableaux et fontions

function addTab(tab = []){
    let somme = 0;
      for(i=0; i<tab.length; i++){
          somme += tab[i];
      }
    console.log(somme);
}

//addTab([1,2,3])

function addTabV2(tab = []){
    const reducer = (previousValue, curr) => previousValue + curr;
    console.log(tab.reduce(reducer));
}

//addTabV2([1,2,3])

function countPair(tab = []) {
    let compteur = 0;
    for (i=0; i<tab.length; i++){
        if (tab[i] % 2 === 0) {
            compteur++;
        }
    }
    console.log(compteur);
}

function countPairV2(tab = []) {
     let newTab = tab.filter(nombre => nombre % 2 === 0);
    console.log(newTab.length);
}

function trierTab(tab = []) {
    min = 0;
    max = 0;

    for (i=0; i<tab.length; i++) {
        for (j=i+1; j<tab.length; j++) {
            if (tab[i]>tab[j]) {
                min = tab[j];
                max = tab[i];
                tab[i] = min;
                tab[j] = max;
            }
        }
    }
    return tab;
}

function tabFusion(tab1 = [], tab2 = []) {

    let newTable = tab1.concat(tab2);
    trierTab(newTable);
    return console.log(newTable);
}

//tabFusion([8,5,6],[4,0,3]);

function compareNombres(a,b){
    return a-b;
}
function plusGrandPair(...valeurs){
    let ordre = valeurs.sort(compareNombres);
    const last = ordre.filter(valeurs => valeurs % 2 === 0);

    return console.log(last[last.length-1])
     }

//plusGrandPair(1,4,8,9,45,44,62,34,105,285);

function dichotomique(tab = [], recherche){
    let dichotomie = '';
    for (i=0; i<tab.length; i++){
        if(recherche === tab[i]){
            dichotomie = recherche + " se trouve dans le tableau à l'indice " + i;
            console.log(dichotomie);
        }
    }
    if (dichotomie === ''){
        return console.log(recherche + " ne se trouve pas dans le tableau");
    }
}

//dichotomique([1,8,9,6,4,5,8],2)

function nbOccurence(tab) {
    let motPhrase = ""
    var compteur = 0;
    for (const motCherche in tab) {

        for (i = 0; i < tab[motCherche].length + 1; i++) {

            if (motPhrase === motCherche) {
                compteur++;
            }
            if (tab[motCherche][i] !== " ") {
                motPhrase += tab[motCherche][i];
            } else {
                motPhrase = "";
            }
        }
        console.log("il y a", compteur, "occurences pour le mot", motCherche);

    }
}
//nbOccurence({ "test": "le test sur le code a été fait. Un autre test est prévu demain" });
