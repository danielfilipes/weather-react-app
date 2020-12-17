import React from 'react'

function Weather({weather, location}) {
    
        
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
                <p>Carregando o clima ...</p>
            </div>
        );
    }
    else if(weather === false){
        return(
            <div>     
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

export default Weather
