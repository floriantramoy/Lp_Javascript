export class Morpion{

    MAX_GRILLE = 8;
    MIN_GRILLE = 3;
    #taille;
    grille = new Array(this.#taille);
    symbole ='x';
    joueur = 1;
    class;
    vainqueur;
    nbCoups = 0;
    score = [0,0];


    constructor(taille){
        if (Number.isNaN(taille) || taille < this.MIN_GRILLE || taille > this.MAX_GRILLE){
            throw new Error ('#taille invalide !');
        }else{
            this.#taille = taille;
        }
    }

    creerGrille(){
        for (let i = 0; i < this.#taille; i++) {
            this.grille[i] = new Array(this.#taille);
            for (let j = 0; j < this.#taille; j++) {
                this.grille[i][j] = ' ';
            }
        }
        return this.grille;
    }

    aGagne (y, x) {
        let nbSymboles;

        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.#taille; col++) {
            if (this.grille[ligne][col] === this.symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.#taille) {
            return true;
        }

        // gagné en colonne ?
        const col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < this.#taille; ligne++) {
            if (this.grille[ligne][col] === this.symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.#taille) {
            return true;
        }

        // gagné diagonale
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < this.#taille; lc++) {
                if (this.grille[lc][lc] === this.symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.#taille) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === this.#taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.#taille; ligne++) {
                if (this.grille[ligne][this.#taille - (ligne + 1)] === this.symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.#taille) {
                return true;
            }
        }

    }

    clicBouton (y, x, mode) {
        if (this.grille[y][x] === ' '){

            this.grille[y][x] = this.symbole;
            this.nbCoups++;

            this.setClass('joueur'+this.getJoueur())
            if (mode ==='complet'){
                var victoire = this.aGagne(y, x);}
            else {
                var victoire = this.aGagne3ParmiN(y,x);
            }
            if (victoire) {
                this.setVainqueur(this.joueur);

                if(this.vainqueur === 1){
                    this.score[0] +=1;
                }else{
                    this.score[1] +=1;
                }

                return true;

            } else if (this.nbCoups === this.#taille * this.#taille) {

                return false;

            }else {
                if (this.symbole === 'x') {

                    this.setSymbole('o');
                    this.setJoueur(2);

                } else{

                    this.setSymbole('x');
                    this.setJoueur(1);

                }
            }
        } else {

            throw new Error ('Case déjà occupée !');

        }
    }

    aGagne3ParmiN (y, x) {
        const aTrouver = this.symbole.repeat(3);

        // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
        let ligne = '';
        this.grille[y].forEach(element => (ligne += element));
        if (ligne.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
        let col = '';
        this.grille.forEach(element => (col += element[x]));
        if (col.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné diagonale
        if (x === y) {
            let diagonale = '';
            for (let lc = 0; lc < this.#taille; lc++) {
                diagonale += this.grille[lc][lc];
            }
            if (diagonale.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === this.#taille - (y + 1)) {
            let inverse = '';
            for (let lc = 0; lc < this.#taille; lc++) {
                inverse += this.grille[lc][this.#taille - (lc + 1)];
            }
            if (inverse.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        return false;
    }

    getSymbole(x, y){
        return this.grille[x][y];
    }
    getJoueur(){
        return this.joueur;
    }
    getScore(){
        return this.score;
    }

    getVainqueur(){
        return this.vainqueur;
    }
    getClass(){
        return this.class;
    }

    setSymbole(value){
        this.symbole = value;
    }

    setJoueur(value){
        this.joueur = value;
    }

    setVainqueur(value) {
        this.vainqueur = value;
    }
    setClass(value){
        this.class = value;
    }

}