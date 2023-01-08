const apiweather = 
{
    key:"ac7c8753adc5ffc5434b73fba668a1a0",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

const weatherText = document.getElementById("temp-text");

async function searchWeatherData()
{
    try 
    {
        const response = await fetch(`${apiweather.url}?lat=-34.57&lon=-58.49&appid=${apiweather.key}&units=metric`);
        const data = await response.json();   
        weatherText.innerHTML = `${"Actual Weather: " + data.weather[0].description + " "+ data.main.temp.toFixed(1) + "°c"}`;
    } 
    catch (error) 
    {
        console.log(error);
        alert("hubo un error");
    }

}
searchWeatherData();
