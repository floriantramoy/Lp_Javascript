let temperature = document.getElementById('temperature');
let ressenti = document.getElementById('ressenti');
let humidite = document.getElementById('humidite');
let min = document.getElementById('min');
let max = document.getElementById('max');

let commune = document.getElementById('ville');
let ville = localStorage.getItem('ville');
commune.innerText = ville;

fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville+"&Lang=fr&units=metric&APPID=bdcfd5d124050b978ba555e048de184e",{
    method : "GET",
}).then(function (reponse){
    return reponse.json();
}).then(function (json){
    temperature.innerText = "Température : " + Math.round(parseInt(json.main.temp)) + "°C";
    ressenti.innerText = "Ressenti : " + Math.round(parseInt(json.main.feels_like)) + "°C";
    humidite.innerText = "Humidité : " + Math.round(parseInt(json.main.humidity)) + "%";
    min.innerText = "Minimum : " + Math.round(parseInt(json.main.temp_min)) + "°C";
    max.innerText = "Maximum : " + Math.round(parseInt(json.main.temp_max)) + "°C";

});