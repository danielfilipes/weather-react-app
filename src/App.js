import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import api from './services/Api';

function App() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherCoords(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  let getWeatherCoords = async (lat, long) => {
    let parameter = {
      params:{
        lat: lat,
        lon: long,
        appid: 'd8c538a2c8a967c6a326d806e56b5680',
        lang: 'pt',
        units: 'metric'
      }
    };
    await getApi(parameter);
  }

  let getWeatherCityName = async (cityName) => {
    let parameter = {
      params: {
        q: cityName,
        appid: 'd8c538a2c8a967c6a326d806e56b5680',
        lang: 'pt',
        units: 'metric'
      } 
    };
    await getApi(parameter);
  }

  let getApi = async (parameter) => {
    try{
      let response = await api.get('', parameter);
      setWeather(response.data);
      console.log(response.data);
    }
    catch(error){
      setWeather(false);
      console.log('ERROR \n' + error);
    }
  }

  if(location === false){
    return(
      <div>
        <p>É preciso permitir a localizacão para continuar ... <br /> Por favor permita a localizacão e atualize a página </p>
      </div>
    );
  }
  else if(weather === null){
    return(
      <div>
        <h1>Weather App</h1>
        <Search findWeather = {getWeatherCityName} />
        <hr />
        <p>Carregando o clima ...</p>
      </div>
    );
  }
  else if(weather === false){
    return(
      <div>
        <h1>Weather App</h1>
        <Search findWeather = {getWeatherCityName} />
        <hr />
        <p>Falha ao carregar o clima.</p>
        <button onClick = {
          () => {
              window.location.reload();
            }}>
              Recarregar
        </button>
      </div>
    );
  }
  else{
    return(
      <div>
        <h1>Weather App</h1>
        <Search findWeather = {getWeatherCityName} />
        <h2>Este é o clima em {weather.name !== '' ? weather.name : 'Latitude: ' + weather.coord.lon + ' | Longitude: ' + weather.coord.lat}</h2>
        <hr />
        <h3>{weather.weather[0].description}</h3>
        <ul>
          <li>Temperatura atual: {weather.main.temp}°C</li>  
          <li>Temperatura máxima: {weather.main.temp_max}°C</li>
          <li>Temperatura mínima: {weather.main.temp_min}°C</li>
          <li>Umidade: {weather.main.humidity}%</li>
          <li>Sensacao térmica: {weather.main.feels_like}°C</li>  
        </ul>
      </div>
    );
  }
}

export default App;
