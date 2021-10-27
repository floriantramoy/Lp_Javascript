let baseUrl = 'https://geo.api.gouv.fr';
const selectVille = document.getElementById('ville');
const selectDepartement = document.getElementById('departement');
const selectRegion = document.getElementById('region');
const populationVille = document.getElementById('pop');
const populationTotale = document.getElementById('popTotale');
const table = document.getElementById('table');
let codesPostaux = [];


fetch(baseUrl+'/regions',{
    method : "GET",
}).then(function (reponse){
    return reponse.json();
}).then(function (json){
    json.forEach(function (region){
        const option = document.createElement('option');
        const texte = document.createTextNode(region.nom);
        option.appendChild(texte);
        option.value = region.code;
        selectRegion.appendChild(option);


    })
});

selectRegion.addEventListener('change', function () {
    selectDepartement.innerHTML='';
    const numeroRegion = this.value;
    if (numeroRegion !== "default") {
        fetch(baseUrl + '/regions/' + numeroRegion + '/departements')
            .then(function (reponse) {
                return reponse.json();
            })
            .then(function (json) {
                selectDepartement.options.length = 1;
                json.forEach(function (departement) {
                    const option = document.createElement('option');
                    const texte = document.createTextNode(departement.nom);
                    option.appendChild(texte);
                    option.value = departement.code;
                    selectDepartement.appendChild(option);
                })
            })
            .catch(function (erreur) {
                alert('erreur : ' + erreur);
            })
    }
});

selectDepartement.addEventListener('change', function () {
    selectVille.innerHTML='';
    const numeroDepartement = this.value;
    if (numeroDepartement !== "default") {
        fetch(baseUrl + '/departements/'+numeroDepartement+'/communes')
            .then(function (reponse) {
                return reponse.json();
            })
            .then(function (json) {
                selectVille.options.length = 1;
                json.forEach(function (ville) {
                    const option = document.createElement('option');
                    const texte = document.createTextNode(ville.nom);
                    option.appendChild(texte);
                    option.value = ville.codesPostaux;
                    option.id = ville.population;
                    selectVille.appendChild(option);
                })
            })
            .catch(function (erreur) {
                alert('erreur : ' + erreur);
            })
    }
});

selectVille.addEventListener('change', function () {
    table.innerHTML = '';
    const numeroDepartement = selectDepartement.value;
    populationVille.innerText = 'Population : ' + selectVille.options[selectVille.selectedIndex].id + " habitants.";
    if (numeroDepartement !== "default") {
        fetch(baseUrl + '/departements/' + numeroDepartement + '/communes')
            .then(function (reponse) {
                return reponse.json();
            })
            .then(function (json) {
                let popTotale = 0;
                json.forEach(function (ville) {
                    if (ville.codesPostaux == selectVille.options[selectVille.selectedIndex].value) {
                        const tr = document.createElement('tr');
                        const td1 = document.createElement('td');
                        const td2 = document.createElement('td');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');

                        td4.id = ville.nom;

                        const nom = document.createTextNode(ville.nom);
                        const cp = document.createTextNode(ville.codesPostaux);
                        const pop = document.createTextNode(ville.population);

                        codesPostaux.push(ville.codesPostaux);
                        popTotale += parseInt(ville.population);


                        td1.appendChild(nom);
                        td2.appendChild(cp);
                        td3.appendChild(pop);
                        td4.innerHTML = '<a href="../vue/tp5_2.html"><img src="../assets/soleil.jpg"></a>';
                        td4.addEventListener('click', ()=> meteo(ville.nom));

                        table.appendChild(tr);
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);

                        populationTotale.innerText = "Population totale : " + popTotale + " habitants.";

                    }
                })
            })
    }
})
function meteo(nom){
    localStorage.setItem('ville', nom);
}

