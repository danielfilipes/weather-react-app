import React from 'react';
import Search from './Search';

function Header({findWeather, weather}){

    let locationText;
    if(weather !== null && weather !== false){
        locationText = <h2>Este é o clima em {weather.name !== '' ? weather.name : 'Latitude: ' + weather.coord.lon + ' | Longitude: ' + weather.coord.lat}</h2>
    }

    return(
        <div>
            <h1>Weather App</h1>
            <Search findWeather = {findWeather} />

            {locationText}

            <hr />
        </div>
    )
}

export default Header;