import React from "react";

// CSS
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

// JS
import Box from "./components/Box.js";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 5000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-primary">Hello !</h1>
          <p> Heart: {heartMin} </p>
          <p> Temperature: {tempMin} </p>
          <p> Steps: {stepsMin} </p>
        </div>

        <div className="row">
        
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value="1.5"
            unit="L"
            
          />
           
          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value = {3000}
            unit="steps"
            
          />
            
          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={120}
            unit="bpm"
            
          />

          {/* Temperature  */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={-10}
            unit="°C"
           
          />
               
        </div>
      </div>
    );
  }
}

export default App;


// state = etat
