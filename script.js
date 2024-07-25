const apiKey="4242888815f32d78612d0e38e0a18514";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icons")
const textInput = document.querySelector(".search input");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404 || response.status==400){
        document.querySelector(".invalid").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data= await response.json();


        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + " %";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";

        if(data.weather[0].main== "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main== "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main== "Rainr"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main== "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main== "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".invalid").style.display="none";
}
    }

       

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBtn.addEventListener("enter", ()=>{
    checkWeather(searchBox.value);
})

textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkWeather(searchBox.value);
    
  }
});