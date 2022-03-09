import React, { useState } from "react";
import axios from "axios";
export default function Weather(props) {
  let [city, Setcity] = useState("");
  let [message, Setmessage] = useState(false);
  let [weather, Setweather] = useState({});

  //display weather
  function showTemperature(response) {
    Setmessage(true);
    console.log(response.data);

    Setweather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "709cee6d37b86718550c6b0917bcc237";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    Setcity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Search" id="searchbar">
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />{" "}
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <ul id="Weatherlist">
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <br />
          <br />
          <li>Description: {weather.description}</li>
          <br />
          <br />
          <li>Wind speed: {Math.round(weather.wind)}km/h</li>
          <br />
          <br />
          <li>Humidity: {weather.humidity}%</li>
          <br />
          <br />
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
