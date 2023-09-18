const apiKey = "dbf3246d7b7bed244add567d712041ec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".wheater-icon")

async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
   var data = await response.json();
   
   console.log(data);

   document.querySelector (".city").innerHTML = data.name;
   document.querySelector (".temp").innerHTML = Math.round(data.main.temp )+ "°c";
   document.querySelector (".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector (".wind").innerHTML = data.wind.speed + "Km/h";

   if(data.weather[0].main == "Clouds"){
       weatherIcon.src="images/clouds.png";
   }
   else if(data.weather[0].main == "Clear"){
       weatherIcon.src="images/clear.png";
   }
   else if(data.weather[0].main == "Rain"){
       weatherIcon.src="images/rain.png";
   }
   else if(data.weather[0].main == "Drizzle"){
       weatherIcon.src="images/drizzle.png";
   }
   else if(data.weather[0].main == "Mist"){
       weatherIcon.src="images/mist.png";
   }
}

searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);

})
searchBox.addEventListener("keydown", (event)=>{
    if(event.key ==="Enter")
    checkWeather(searchBox.value);
})

document.addEventListener("DOMContentLoaded", function () {
const now = new Date();
const currentHour = now.getHours();
const colorChangeDiv = document.querySelector(".card");
if (currentHour >= 6 && currentHour < 12) {
   colorChangeDiv.classList.add("morning");
} else if (currentHour >= 12 && currentHour < 18) {
   colorChangeDiv.classList.add("afternoon");
} else {
   colorChangeDiv.classList.add("night");
}

});
