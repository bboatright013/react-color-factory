import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';


function App({colors}) {

  const [colorsState, setColorsState] = useState(colors);

  return (
    <div className="App">
    <Routes colors={colorsState} addColor={setColorsState} />
    </div>
  );
}

App.defaultProps = {
  colors : [
      "red",
      "white",
      "blue"
  ]

  
}

export default App;
