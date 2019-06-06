import React from 'react';
import Weather from './weather';
import PartlyCloudy from './images/partly-cloudy.png';
import Rain from './images/rain.png';
import Sunny from './images/sunny.png';
import Cloudy from './images/cloudy.png';
import Snow from './images/snow.png';

import './style/App.css';

function App() {
  return (
    <div className="App">
      <Weather day="Monday" mostly={PartlyCloudy} high="73" low="62" />
      <Weather day="Tuesday" mostly={Rain} high="65" low="55" />
      <Weather day="Wednesday" mostly={Sunny} high="75" low="65" />
      <Weather day="Thursday" mostly={Cloudy} high="63" low="58" />
      <Weather day="Friday" mostly={Snow} high="55" low="40" />          
    </div>
  );
}

export default App;
