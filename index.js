
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


function showWorker(type){

let result = document.getElementById("result");

if(type==="electric"){
result.innerHTML = `

<div class="worker-card">
<h3>Raju Electrician</h3>
<p>Jhilu Village</p>
<a href="tel:9876543210">Call</a>
</div>

<div class="worker-card">
<h3>Suman Electric Works</h3>
<p>Jhilu Village</p>
<a href="tel:9876543211">Call</a>
</div>

<div class="worker-card">
<h3>Arif Electric Service</h3>
<p>Jhilu Village</p>
<a href="tel:9876543212">Call</a>
</div>

`;
}

if(type==="plumber"){
result.innerHTML = `

<div class="worker-card">
<h3>Babu Plumber</h3>
<p>Jhilu Village</p>
<a href="tel:9876543220">Call</a>
</div>

`;
}

if(type==="mason"){
result.innerHTML = `

<div class="worker-card">
<h3>Karim Rajmistri</h3>
<p>Jhilu Village</p>
<a href="tel:9876543230">Call</a>
</div>

`;
}

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