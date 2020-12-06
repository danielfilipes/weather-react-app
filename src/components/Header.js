import React from 'react';
import Search from './Search';

function Header({findWeather}){
    return(
        <div>
            <h1>Weather App</h1>
            <Search findWeather = {getWeatherCityName} />
            <hr />
      </div>
    )
}

export default Header;