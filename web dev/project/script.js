const city=document.querySelector("#city");
const search=document.querySelector("#search");
const API_KEY="d0b4bd2cdbb42ae1a0998288414eacea";

search.addEventListener("click", async function(e){
    e.preventDefault();
    const data=city.value;
    console.log(data);
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`)
    const weatherData=await response.json();
    console.log(weatherData);
    console.log("city name:", weatherData.name);
    console.log("temperature:", weatherData.main.temp);
    console.log("weather:", weatherData.weather.main);
    console.log("humidity:", weatherData.main.humidity);
    console.log("wind:",weatherData.wind.speed,"miles/hour");

})