const apiKey="4242888815f32d78612d0e38e0a18514";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icons")
const textInput = document.querySelector(".search input");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404 || response.status==400){
        
        weatherIcon.src = "images/not-found.png"
        document.querySelector(".temp").innerHTML="City"
        document.querySelector(".city").innerHTML="Not found"
        document.querySelector(".temp").style.fontSize = "30px";
        document.querySelector(".city").style.fontSize = "30px";
        document.querySelector(".city").style.paddingTop = "15px";
        document.querySelector(".humidity").innerHTML= "N/A";
        document.querySelector(".wind").innerHTML= "N/A"
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

const defaultCity = "kolkata";
checkWeather(defaultCity);