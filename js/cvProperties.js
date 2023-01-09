const apiweather = 
{
    key:"ac7c8753adc5ffc5434b73fba668a1a0",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

var contactPopup = document.getElementById("contactPopup");
var bgPanel = document.getElementById("bgPanel");
var contactButton = document.getElementById("contactButton");
var weatherText = document.getElementById("temp-text");

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

function openContactPopUp()
{
    contactPopup.style.transform=("translate(-50%,-50%) scale(1)");
    contactPopup.style.visibility = "visible";
    bgPanel.style.visibility = "visible";

}

function closeContactPopUp()
{
    contactPopup.style.transform=("translate(-50%,-50%) scale(0.1)");
    contactPopup.style.visibility = "hidden";
    bgPanel.style.visibility = "hidden";
}