import React, { useState } from 'react'

function Search({findWeather}) {

    const [inputCity, setInputCity] = useState('');

    const handlerInputCity = (e) => {
        setInputCity(e.target.value);
    }

    const handlerSearchClick = () => {
        findWeather(inputCity);
    }

    return (
        <div>
            <input type='text' 
                placeholder='Cidade' 
                value={inputCity} 
                onChange={handlerInputCity} 
            />
            <button onClick={handlerSearchClick}>Pesquisar</button>
        </div>
    )
}

export default Search
