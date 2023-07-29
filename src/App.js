import React, { useState } from "react";
import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=463d42889f0dabf3d5bb26e380f048f8´

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p></p>
          </div>
          <div className="temp">
            <h1></h1>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p></p>
          </div>
          <div className="humidity">
            <p></p>
          </div>
          <div className="wind">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
