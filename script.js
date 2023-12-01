const apiKey = "331b919eccde6b573832ed958f23b2ef";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=";
const seachBox = document.querySelector(".search input");
const seachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "&units=metric");

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.ceil(data.wind.speed * 1.609344) + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Thunder") {
      weatherIcon.src = "images/thunder.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/haze.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

seachBtn.addEventListener("click", () => {
  checkWeather(seachBox.value);
});

checkWeather();
