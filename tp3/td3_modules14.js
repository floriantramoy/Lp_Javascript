import {binarySearch44, getMaxEven45, getNumberOfEven42, getSum41} from "./array_utils.js";

let result = [];
let plus = document.getElementsByClassName('addNewElement')[0] || null;

if (plus) {
    plus.addEventListener('click', cloneElementInput)
}

let production = document.getElementById('resultat');
let rechercher = document.querySelector('.rechercher');


production.addEventListener('click', function () {
    let input = document.getElementsByName('elements[]');
    let longueur = input.length;
    for (let i = 0; i < longueur; i++) {
        if (input[i].value !== '') {
            let lastValue = parseInt(input[i].value);
            result.push(lastValue);
        }
    }

           document.getElementById('somme').innerText =  getSum41(result);
           document.getElementById('nbPairs').innerText = getNumberOfEven42(result);
           document.getElementById('grandPair').innerText = getMaxEven45(...result);
           document.getElementById('position').innerText =  binarySearch44(result, parseInt(rechercher.querySelector('input').value));
           result = [];
   });


function cloneElementInput(e) {
    e.preventDefault();
    let numberOfElements = document.getElementsByClassName('calculatrice')[0].children.length-4;
    let elementToClone = document.querySelector('.cloneDiv');
    //elementToClone.querySelector('label').innerText = elementToClone.querySelector('label').innerText.slice(0,8) + numberOfElements;
    let newElement = elementToClone.cloneNode(true);
    newElement.querySelector('label').innerText = elementToClone.querySelector('label').innerText.slice(0,8) + numberOfElements;
    let btn = elementToClone.querySelector('.addNewElement');

    elementToClone.classList.remove('cloneDiv');

    btn.parentNode.removeChild(btn);
    elementToClone.parentNode.insertBefore(newElement, elementToClone.nextSibling);

    newElement.querySelector('input').value = '';
    newElement.querySelector('.addNewElement').addEventListener('click',cloneElementInput);
}
