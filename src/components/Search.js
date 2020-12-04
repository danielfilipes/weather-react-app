import React, { useState } from 'react'

function Search() {

    const [inputCity, setInputCity] = useState('');

    const handlerInputCity = (e) => {
        setInputCity(e.target.value);
    }

    const handlerSearchClick = () => {

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
