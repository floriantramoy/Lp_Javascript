let cases = document.getElementsByTagName('button');
do {
    var taille = prompt('Choisissez une taille de morpion entre 3 et 8');

} while (taille < 3 || taille > 8);

    let joueur1 = prompt('Nom du joueur 1 : ');
    let joueur2 = prompt('Nom du joueur 2 : ');
    let scoreO = 0;
    let scoreX = 0;

document.getElementById('nom').innerHTML = joueur1 + ' (O) : ' + scoreO +'<br><br>' + joueur2 + ' (X) : ' + scoreX;
let turn = 1;

function mode() {
    do {
        var mode = prompt('Mode simple et complet? Ecrivez simple ou complet.')
    } while (mode !== 'simple' && mode !== 'complet')

    return mode;
}

function grille(taille) {


    let jeu = [];
    jeu = document.getElementById('jeu');

    for (i = 0; i < taille; i++) {
        jeu.innerHTML += '<div></div>';
        for (j = 0; j < taille; j++) {
            jeu.innerHTML += '<button id=' + i + j + '></button>'
        }
    }
    document.getElementById("informations").innerHTML = "Vous pouvez commencer !";

}

function nouvelleGrilleNul(){
    jeu = document.getElementById('jeu');
    jeu.innerHTML ='';
    do {
        var taille = prompt('Choisissez une taille de morpion entre 3 et 8');

    } while (taille < 3 || taille > 8);
    jouer(taille);

}

function nouvelleGrille(vainqueur){
    jeu = document.getElementById('jeu');
    jeu.innerHTML ='';
    do {
        var taille = prompt('Choisissez une taille de morpion entre 3 et 8');

    } while (taille < 3 || taille > 8);
    jouer(taille);
    if (vainqueur === 'O'){
        scoreO++;
    }else{
        scoreX++;
    }
    document.getElementById('nom').innerHTML = joueur1 + ' (O) : ' + scoreO +'<br><br>' + joueur2 + ' (X) : ' + scoreX;

}


function symboleJoueur(turn) {
    let joueur = '';
    if (turn % 2 === 0) {
        joueur = 'X';
    } else {
        joueur = 'O';
    }
    return joueur;
}


function updateTour(val) {
    document.getElementById("informations").innerHTML = "C'est au tour de " + symboleJoueur(val);
}

function matchNul(cases) {
    let casesVides = cases.length;
    for (i = 0; i < cases.length; i++) {
        if (cases[i].innerHTML !== '') {
            casesVides--;
        }
        if (casesVides === 0) {
            document.getElementById("informations").innerHTML = 'Match nul <br> <button onclick="nouvelleGrilleNul()">Rejouer</button>'
        }
    }
}

function winLigne(taille, turn){
    if (taille == 3) {
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if(cases[3].innerHTML !== '' &&
            cases[4].innerHTML === cases[3].innerHTML &&
            cases[5].innerHTML === cases[3].innerHTML){
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if(cases[6].innerHTML !== '' &&
            cases[7].innerHTML === cases[6].innerHTML &&
            cases[8].innerHTML === cases[6].innerHTML){
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
    else if(taille == 4) {
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML &&
            cases[3].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[4].innerHTML !== '' &&
            cases[5].innerHTML === cases[4].innerHTML &&
            cases[6].innerHTML === cases[4].innerHTML &&
            cases[7].innerHTML === cases[4].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[8].innerHTML !== '' &&
            cases[9].innerHTML === cases[8].innerHTML &&
            cases[10].innerHTML === cases[8].innerHTML &&
            cases[11].innerHTML === cases[8].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[12].innerHTML !== '' &&
            cases[13].innerHTML === cases[12].innerHTML &&
            cases[14].innerHTML === cases[12].innerHTML &&
            cases[15].innerHTML === cases[12].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
    else if (taille == 5){
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML &&
            cases[3].innerHTML === cases[0].innerHTML &&
            cases[4].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[5].innerHTML !== '' &&
            cases[6].innerHTML === cases[5].innerHTML &&
            cases[7].innerHTML === cases[5].innerHTML &&
            cases[8].innerHTML === cases[5].innerHTML &&
            cases[9].innerHTML === cases[5].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[10].innerHTML !== '' &&
            cases[11].innerHTML === cases[10].innerHTML &&
            cases[12].innerHTML === cases[10].innerHTML &&
            cases[13].innerHTML === cases[10].innerHTML &&
            cases[14].innerHTML === cases[10].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[15].innerHTML !== '' &&
            cases[16].innerHTML === cases[15].innerHTML &&
            cases[17].innerHTML === cases[15].innerHTML &&
            cases[18].innerHTML === cases[15].innerHTML &&
            cases[19].innerHTML === cases[15].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[20].innerHTML !== '' &&
            cases[21].innerHTML === cases[20].innerHTML &&
            cases[22].innerHTML === cases[20].innerHTML &&
            cases[23].innerHTML === cases[20].innerHTML &&
            cases[24].innerHTML === cases[20].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
    if (taille == 6){
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML &&
            cases[3].innerHTML === cases[0].innerHTML &&
            cases[4].innerHTML === cases[0].innerHTML &&
            cases[5].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[6].innerHTML !== '' &&
            cases[7].innerHTML === cases[6].innerHTML &&
            cases[8].innerHTML === cases[6].innerHTML &&
            cases[9].innerHTML === cases[6].innerHTML &&
            cases[10].innerHTML === cases[6].innerHTML &&
            cases[11].innerHTML === cases[6].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[12].innerHTML !== '' &&
            cases[13].innerHTML === cases[12].innerHTML &&
            cases[14].innerHTML === cases[12].innerHTML &&
            cases[15].innerHTML === cases[12].innerHTML &&
            cases[16].innerHTML === cases[12].innerHTML &&
            cases[17].innerHTML === cases[12].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[18].innerHTML !== '' &&
            cases[19].innerHTML === cases[18].innerHTML &&
            cases[20].innerHTML === cases[18].innerHTML &&
            cases[21].innerHTML === cases[18].innerHTML &&
            cases[22].innerHTML === cases[18].innerHTML &&
            cases[23].innerHTML === cases[18].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[24].innerHTML !== '' &&
            cases[25].innerHTML === cases[24].innerHTML &&
            cases[26].innerHTML === cases[24].innerHTML &&
            cases[27].innerHTML === cases[24].innerHTML &&
            cases[28].innerHTML === cases[24].innerHTML &&
            cases[29].innerHTML === cases[24].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[30].innerHTML !== '' &&
            cases[31].innerHTML === cases[30].innerHTML &&
            cases[32].innerHTML === cases[30].innerHTML &&
            cases[33].innerHTML === cases[30].innerHTML &&
            cases[34].innerHTML === cases[30].innerHTML &&
            cases[35].innerHTML === cases[30].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
    if (taille == 7){
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML &&
            cases[3].innerHTML === cases[0].innerHTML &&
            cases[4].innerHTML === cases[0].innerHTML &&
            cases[5].innerHTML === cases[0].innerHTML &&
            cases[6].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[7].innerHTML !== '' &&
            cases[8].innerHTML === cases[7].innerHTML &&
            cases[9].innerHTML === cases[7].innerHTML &&
            cases[10].innerHTML === cases[7].innerHTML &&
            cases[11].innerHTML === cases[7].innerHTML &&
            cases[12].innerHTML === cases[7].innerHTML &&
            cases[13].innerHTML === cases[7].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[14].innerHTML !== '' &&
            cases[15].innerHTML === cases[14].innerHTML &&
            cases[16].innerHTML === cases[14].innerHTML &&
            cases[17].innerHTML === cases[14].innerHTML &&
            cases[18].innerHTML === cases[14].innerHTML &&
            cases[19].innerHTML === cases[14].innerHTML &&
            cases[20].innerHTML === cases[14].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[21].innerHTML !== '' &&
            cases[22].innerHTML === cases[21].innerHTML &&
            cases[23].innerHTML === cases[21].innerHTML &&
            cases[24].innerHTML === cases[21].innerHTML &&
            cases[25].innerHTML === cases[21].innerHTML &&
            cases[26].innerHTML === cases[21].innerHTML &&
            cases[27].innerHTML === cases[21].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[29].innerHTML !== '' &&
            cases[29].innerHTML === cases[28].innerHTML &&
            cases[30].innerHTML === cases[28].innerHTML &&
            cases[31].innerHTML === cases[28].innerHTML &&
            cases[32].innerHTML === cases[28].innerHTML &&
            cases[33].innerHTML === cases[28].innerHTML &&
            cases[34].innerHTML === cases[28].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[35].innerHTML !== '' &&
            cases[36].innerHTML === cases[35].innerHTML &&
            cases[37].innerHTML === cases[35].innerHTML &&
            cases[38].innerHTML === cases[35].innerHTML &&
            cases[39].innerHTML === cases[35].innerHTML &&
            cases[40].innerHTML === cases[35].innerHTML &&
            cases[41].innerHTML === cases[35].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[42].innerHTML !== '' &&
            cases[43].innerHTML === cases[42].innerHTML &&
            cases[44].innerHTML === cases[42].innerHTML &&
            cases[45].innerHTML === cases[42].innerHTML &&
            cases[46].innerHTML === cases[42].innerHTML &&
            cases[47].innerHTML === cases[42].innerHTML &&
            cases[48].innerHTML === cases[42].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
    if (taille == 8){
        if (cases[0].innerHTML !== '' &&
            cases[1].innerHTML === cases[0].innerHTML &&
            cases[2].innerHTML === cases[0].innerHTML &&
            cases[3].innerHTML === cases[0].innerHTML &&
            cases[4].innerHTML === cases[0].innerHTML &&
            cases[5].innerHTML === cases[0].innerHTML &&
            cases[6].innerHTML === cases[0].innerHTML &&
            cases[7].innerHTML === cases[0].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[8].innerHTML !== '' &&
            cases[9].innerHTML === cases[8].innerHTML &&
            cases[10].innerHTML === cases[8].innerHTML &&
            cases[11].innerHTML === cases[8].innerHTML &&
            cases[12].innerHTML === cases[8].innerHTML &&
            cases[13].innerHTML === cases[8].innerHTML &&
            cases[14].innerHTML === cases[8].innerHTML &&
            cases[15].innerHTML === cases[8].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[16].innerHTML !== '' &&
            cases[17].innerHTML === cases[16].innerHTML &&
            cases[18].innerHTML === cases[16].innerHTML &&
            cases[19].innerHTML === cases[16].innerHTML &&
            cases[20].innerHTML === cases[16].innerHTML &&
            cases[21].innerHTML === cases[16].innerHTML &&
            cases[22].innerHTML === cases[16].innerHTML &&
            cases[23].innerHTML === cases[16].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[24].innerHTML !== '' &&
            cases[25].innerHTML === cases[24].innerHTML &&
            cases[26].innerHTML === cases[24].innerHTML &&
            cases[27].innerHTML === cases[24].innerHTML &&
            cases[28].innerHTML === cases[24].innerHTML &&
            cases[29].innerHTML === cases[24].innerHTML &&
            cases[30].innerHTML === cases[24].innerHTML &&
            cases[31].innerHTML === cases[24].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[32].innerHTML !== '' &&
            cases[33].innerHTML === cases[32].innerHTML &&
            cases[34].innerHTML === cases[32].innerHTML &&
            cases[35].innerHTML === cases[32].innerHTML &&
            cases[36].innerHTML === cases[32].innerHTML &&
            cases[37].innerHTML === cases[32].innerHTML &&
            cases[38].innerHTML === cases[32].innerHTML &&
            cases[39].innerHTML === cases[32].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[40].innerHTML !== '' &&
            cases[41].innerHTML === cases[40].innerHTML &&
            cases[42].innerHTML === cases[40].innerHTML &&
            cases[43].innerHTML === cases[40].innerHTML &&
            cases[44].innerHTML === cases[40].innerHTML &&
            cases[45].innerHTML === cases[40].innerHTML &&
            cases[46].innerHTML === cases[40].innerHTML &&
            cases[47].innerHTML === cases[40].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[48].innerHTML !== '' &&
            cases[49].innerHTML === cases[48].innerHTML &&
            cases[50].innerHTML === cases[48].innerHTML &&
            cases[51].innerHTML === cases[48].innerHTML &&
            cases[52].innerHTML === cases[48].innerHTML &&
            cases[53].innerHTML === cases[48].innerHTML &&
            cases[54].innerHTML === cases[48].innerHTML &&
            cases[55].innerHTML === cases[48].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        } else if (cases[56].innerHTML !== '' &&
            cases[57].innerHTML === cases[56].innerHTML &&
            cases[58].innerHTML === cases[56].innerHTML &&
            cases[59].innerHTML === cases[56].innerHTML &&
            cases[60].innerHTML === cases[56].innerHTML &&
            cases[61].innerHTML === cases[56].innerHTML &&
            cases[62].innerHTML === cases[56].innerHTML &&
            cases[63].innerHTML === cases[56].innerHTML) {
            document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
        }
    }
}

function winDiag(taille, turn) {
    if (cases[0].innerHTML !== ''){
        if (taille == 3){
            if (cases[4].innerHTML === cases[0].innerHTML &&
                cases[8].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 4){
            if (cases[5].innerHTML === cases[0].innerHTML &&
                cases[10].innerHTML === cases[0].innerHTML &&
                cases[15].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 5){
            if (cases[6].innerHTML === cases[0].innerHTML &&
                cases[12].innerHTML === cases[0].innerHTML &&
                cases[18].innerHTML === cases[0].innerHTML &&
                cases[24].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 6){
            if (cases[7].innerHTML === cases[0].innerHTML &&
                cases[14].innerHTML === cases[0].innerHTML &&
                cases[21].innerHTML === cases[0].innerHTML &&
                cases[28].innerHTML === cases[0].innerHTML &&
                cases[35].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 7){
            if (cases[8].innerHTML === cases[0].innerHTML &&
                cases[16].innerHTML === cases[0].innerHTML &&
                cases[24].innerHTML === cases[0].innerHTML &&
                cases[32].innerHTML === cases[0].innerHTML &&
                cases[40].innerHTML === cases[0].innerHTML &&
                cases[48].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 8){
            if (cases[9].innerHTML === cases[0].innerHTML &&
                cases[18].innerHTML === cases[0].innerHTML &&
                cases[27].innerHTML === cases[0].innerHTML &&
                cases[36].innerHTML === cases[0].innerHTML &&
                cases[45].innerHTML === cases[0].innerHTML &&
                cases[54].innerHTML === cases[0].innerHTML &&
                cases[63].innerHTML === cases[0].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
}

function winDiagInverse(taille, turn) {
    if (cases[taille-1].innerHTML !== ''){
        if (taille == 3){
            if (cases[4].innerHTML === cases[taille-1].innerHTML &&
                cases[6].innerHTML === cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 4){
            if (cases[6].innerHTML === cases[taille-1].innerHTML &&
                cases[9].innerHTML === cases[taille-1].innerHTML &&
                cases[12].innerHTML === cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 5){
            if (cases[8].innerHTML === cases[taille-1].innerHTML &&
                cases[12].innerHTML === cases[taille-1].innerHTML &&
                cases[16].innerHTML === cases[taille-1].innerHTML &&
                cases[20].innerHTML === cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 6){
            if (cases[10].innerHTML === cases[taille-1].innerHTML &&
                cases[15].innerHTML ===cases[taille-1].innerHTML &&
                cases[20].innerHTML ===cases[taille-1].innerHTML &&
                cases[25].innerHTML ===cases[taille-1].innerHTML &&
                cases[30].innerHTML ===cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 7){
            if (cases[12].innerHTML  === cases[taille-1].innerHTML &&
                cases[18].innerHTML === cases[taille-1].innerHTML &&
                cases[24].innerHTML === cases[taille-1].innerHTML &&
                cases[30].innerHTML === cases[taille-1].innerHTML &&
                cases[36].innerHTML === cases[taille-1].innerHTML &&
                cases[42].innerHTML === cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
        else if (taille == 8){
            if (cases[14].innerHTML  === cases[taille-1].innerHTML &&
                cases[21].innerHTML === cases[taille-1].innerHTML &&
                cases[28].innerHTML === cases[taille-1].innerHTML &&
                cases[35].innerHTML === cases[taille-1].innerHTML &&
                cases[42].innerHTML === cases[taille-1].innerHTML &&
                cases[49].innerHTML === cases[taille-1].innerHTML &&
                cases[56].innerHTML === cases[taille-1].innerHTML){
                document.getElementById("informations").innerHTML = 'Le vainqueur est '+ symboleJoueur(++turn) +'<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
}

function winColonne(taille, turn) {
    if (taille == 3) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
    if (taille == 4) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*3)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
    if (taille == 5) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*3)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*4)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
    if (taille == 6) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*3)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*4)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*5)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
    if (taille == 7) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*3)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*4)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*5)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*6)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }
    if (taille == 8) {
        for (let i = 0; i < taille; i++) {
            if (cases[i].innerHTML !== '' &&
                cases[parseInt(taille)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*2)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*3)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*4)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*5)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*6)+i].innerHTML === cases[i].innerHTML &&
                cases[(parseInt(taille)*7)+i].innerHTML === cases[i].innerHTML) {
                document.getElementById("informations").innerHTML = 'Le vainqueur est ' + symboleJoueur(++turn) + '<br> <button onclick="nouvelleGrille(symboleJoueur(++turn))">Rejouer</button>';
            }
        }
    }

}


function jouer(taille) {
    grille(taille);
    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener("click", function () {
            if (cases[i].innerHTML !== '') {
                alert('La case est déja remplie, veuillez choisir une autre case.');
            } else {
                cases[i].innerHTML = symboleJoueur(turn);
                updateTour(++turn);
                matchNul(cases);
                winDiag(taille, turn);
                winDiagInverse(taille, turn);
                winLigne(taille,turn);
                winColonne(taille,turn);
            }

        })

    }
}

jouer(taille);