const apikey="2a75df8f785c290677163a7d1ca6b8ea"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiurl + "&q=" + city + "&appid=" + apikey)
   
var data = await response.json()
console.log(data);

document.querySelector(".city").innerHTML=data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"
document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"

if(data.weather[0].main=="Clouds"){
   weatherIcon.src="images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png"
}
else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png"
}
else if(data.weather[0].main=="Thunderstorm"){
    weatherIcon.src="images/storm.png"
}
else{
    weatherIcon.src=""
}
    
}


searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
})


 
