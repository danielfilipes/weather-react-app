import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search';
import api from './services/Api';

function App() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  let getWeather = async (lat, long) => {
    let response = await api.get('', {
      params: {
        lat: lat,
        lon: long,
        appid: 'd8c538a2c8a967c6a326d806e56b5680',
        lang: 'pt',
        units: 'metric'
      } 
    });
    setWeather(response.data);
    console.log(response.data);
  }

  if(location === false){
    return(
      <div>
        <p>É preciso permitir a localizacão para continuar ... <br /> Por favor permita a localizacão e atualize a página </p>
      </div>
    );
  }
  else if(weather === false){
    return(
      <p>Carregando o clima ...</p>
    );
  }
  else{
    return(
      <div>
        <h1>Weather App</h1>
        <h2>Este é o clima em {weather.name !== '' ? weather.name : 'Latitude: ' + weather.coord.lon + ' | Longitude: ' + weather.coord.lat}</h2>
        <hr />
        <h3>{weather.weather[0].description}</h3>
        <ul>
          <li>Temperatura atual: {weather.main.temp}°C</li>  
          <li>Temperatura máxima: {weather.main.temp_max}°C</li>
          <li>Temperatura mínima: {weather.main.temp_min}°C</li>
          <li>Umidade: {weather.main.humidity}%</li>
        </ul>
      </div>
    );
  }

  // return (
  //   <div className="App">
      
  //     {/* <Search /> */}
      
  //   </div>
  // );
}

export default App;
