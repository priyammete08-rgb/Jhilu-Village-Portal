
function toggleMenu(){
var menu = document.getElementById("menu");
menu.classList.toggle("active");
}

function closeMenu(){
var menu = document.getElementById("menu");
menu.classList.remove("active");
}

function closePopup(){
document.getElementById("popup").style.display="none";
}


const sheetURL = "https://docs.google.com/spreadsheets/d/1RYLvuQz46OFP-E2gbcpukhhyZskIrHyGY-MdV3WlnVk/export?format=csv";

let workers = [];

async function loadData(){
let res = await fetch(sheetURL);
let data = await res.text();

let rows = data.trim().split("\n").slice(1);

workers = rows.map(row => {
let cols = row.split(",");
return {
name: cols[0],
work: cols[1],
phone: cols[2],
location: cols[3]
};
});
}

loadData();

function showWorker(type){

let container = document.getElementById("result");

if(workers.length === 0){
container.innerHTML = "⏳ Loading...";
return;
}

let filtered = workers.filter(w => w.work.trim() === type);

container.innerHTML = "";

if(filtered.length === 0){
container.innerHTML = "<p>No worker found</p>";
return;
}

filtered.forEach(w => {
container.innerHTML += `
<div class="card">
<h3>${w.name}</h3>
<p>${w.work}</p>
<p>📍 ${w.location}</p>
<a href="https://wa.me/91${w.phone}">Contact</a>
</div>
`;
});

  }
const apiKey = "b6e0a8ef12c56ad6b01627cc71a9a5ee";

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=23.54&lon=87.93&units=metric&appid=${apiKey}`)
.then(res => res.json())
.then(data => {

let temp = data.main.temp;
let desc = data.weather[0].description;
let humidity = data.main.humidity;
let icon = data.weather[0].icon;

document.getElementById("weatherBox").innerHTML = `
<img src="https://openweathermap.org/img/wn/${icon}@2x.png">
<h1>${temp}°C</h1>
<p>${desc}</p>
<p>Humidity: ${humidity}%</p>
`;

})
.catch(()=>{
document.getElementById("weatherBox").innerHTML = "Weather not available";
});


fetch("https://opensheet.elk.sh/1DxMiJtCnF1mdj3rN9LoWJGrxpH84_Rzcx69xIrpA0Rs/Sheet1")
.then(res => res.json())
.then(data => {

let box = document.getElementById("newsBox");
box.innerHTML = "";

data.forEach(item => {

box.innerHTML += `
<div class="news-card">
<h3>${item.title}</h3>
<p>${item.news}</p>
</div>
`;

});

});
