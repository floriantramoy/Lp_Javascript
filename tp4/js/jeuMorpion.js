import {Morpion} from "./Morpion.js";
import {MorpionSimple} from "./MorpionSimple.js";

let morpion;
let scores = [0,0];
let table;
let taille;
let modeJeu;
let zoneMessage;
let grille;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', rejouer);



function rejouer(){
    zoneMessage = document.getElementById('messages');
    taille = Number.parseInt(document.getElementById('taille').value);
    modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
    table = document.getElementById('table_morpion');
    table.innerHTML = '';

    try{
        if (modeJeu === 'complet'){
            morpion = new Morpion(taille);
        }else{
            morpion = new MorpionSimple(taille);
        }
        grille = morpion.creerGrille();
        zoneMessage.innerHTML = "Joueur "+ morpion.getJoueur()+', à toi !';
    }catch(e){
        zoneMessage.innerText = e.message;
    }
    for (let i = 0; i < grille.length; i++) {
        const ligne = table.insertRow(i);
        for (let j = 0; j < grille.length; j++) {
            const id = '' + ((i + 1) * 10 + (j + 1));
            const cell = ligne.insertCell(j);
            cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
            cell.firstChild.addEventListener("click", () => clicBouton(cell.firstChild, i, j));
            document.getElementById(id).value = '';
        }
    }
}

function clicBouton(uneCase, y, x) {
    try{
        let etat = morpion.clicBouton(y, x,modeJeu);
        uneCase.classList.add(morpion.getClass());
        uneCase.value = morpion.getSymbole(y,x);
        zoneMessage.innerHTML = 'Joueur ' + morpion.getJoueur() + ', à toi de jouer !';

        if(etat === true){
            desactiveEcouteurs();
            zoneMessage.innerHTML = 'Le joueur ' + morpion.getVainqueur() + ' a gagné !';
            scores[0] += morpion.getScore()[0];
            scores[1] += morpion.getScore()[1];
            document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
        }
        if(etat === false){
            desactiveEcouteurs();
            zoneMessage.innerHTML = 'Match Nul !';
        }
    }catch(e){
        zoneMessage.innerHTML = e.message;
    }

}

function desactiveEcouteurs () {
    for (let i = 0; i < grille.length; i++) {
        for (let j = 0; j < grille.length; j++) {
            document.getElementById('' + ((i + 1) * 10 + (j + 1))).disabled = true;
        }
    }
    document.getElementById('btn_reset').disabled = false;
}

rejouer();