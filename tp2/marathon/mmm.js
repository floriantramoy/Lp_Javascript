function insertArticle0(){
    let art1 = document.body.childNodes[1];


let nomArt0 = document.createElement('h2');
nomArt0.innerHTML = 'Article 0 - Interdiction';

let textArt0 = document.createElement('p');
textArt0.innerHTML = 'Il est interdit de vous doubler, sous peine de disqualification.';

document.body.insertBefore(textArt0, art1);
document.body.insertBefore(nomArt0, textArt0);
textArt0.style = 'color:#000000';}

function h2uppercase() {
    let h2 = document.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
        h2[i].innerText = h2[i].innerText.toUpperCase();
    }
}

function decalerNumero() {
    for (i = 0; i < h2.length; i++) {
        let indiceArticle = h2[i].innerText.slice(8, 10);
        h2[i].innerText = h2[i].innerText.replace(indiceArticle, i + 1);
    }
}

function background1Sur2() {
    for (i = 0; i < h2.length; i++) {
        if (i % 2 !== 0) {
            h2[i].style = 'background-color : lightgrey ; padding : 0px';
        }
    }

    let body = document.getElementsByTagName('body');
    let balises = [];
    for (let i = 0; i < body[0].children.length; i++) {
        balises[i] = body[0].children[i].tagName;
    }

    let compteur = 0;
    for (i = 0; i < balises.length; i++) {
        if (balises[i] === 'H2') {
            compteur++;
        }
        if (compteur % 2 === 0) {
            body[0].children[i].style.backgroundColor = 'lightgray';
        }
    }
}
function inverserInscription() {
    let ul = document.getElementsByTagName('ul');
    for (let i = 0; i < ul.length; i++) {
        if (ul[i].childNodes.length === 3) {
            document.body.insertBefore(ul[i], ul[0])
        }
    }
}







