import React, {useEffect} from 'react';
import './App.css';
import Search from './components/Search';
import api from './services/Api';

function App() {

  useEffect(() => {
    api.get('weather?q=bocaiuva&appid=d8c538a2c8a967c6a326d806e56b5680')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <div className="App">
      
      <Search />
      
    </div>
  );
}

export default App;
