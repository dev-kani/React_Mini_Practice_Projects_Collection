import { useState } from "react";

const Temperature_Controller = () => {
  const [temperatureValue, setTemperatureValue] = useState(12);
  const [tempColor, setTempColor] = useState()

  const increaseTemp = () => {
    if (temperatureValue === 25) return;
    setTemperatureValue(temperatureValue + 1)
    const newTemp = temperatureValue + 1;
    if (newTemp >= 15 ) {
      setTempColor("hot")
    } 
  }

  const decreaseTemp = () => {
    if (temperatureValue === -5) return;
    setTemperatureValue(temperatureValue - 1)
    if (temperatureValue < 10 ) {
      setTempColor("cold")
    } 
  }


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
          <button onClick={() => increaseTemp()}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
    </div>
  );
}

export default Temperature_Controller;