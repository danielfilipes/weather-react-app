import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
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
    setWeather(null);
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

  return(
    <div>
      <Header findWeather = {getWeatherCityName} weather = {weather} />
      <Weather weather = {weather} location = {location} />
    </div>
  )
}

export default App;
