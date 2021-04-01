import './App.css';
import React, {useState} from "react";

function App() {
  const [colors, setColors] = useState([])

  const colorPicker= () =>{
    const elements = "0123456789abcdef";
    let colorelement = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random()*elements.length)
      colorelement +=elements[index]
    }
    setColors([`#${colorelement}`, ...colors])
  };
  
  return (
    <div className="App">
      <ul className="color-main">
        {
          colors.map(element => 
            <li className="color" style={{backgroundColor: element}} key={element}>{element}</li>
          )
        }
      </ul>
      <button className="button" onClick={colorPicker}>click me</button>
    </div>
  );
}

export default App;
