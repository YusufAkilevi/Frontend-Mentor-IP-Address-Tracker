import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [coords, setCoords] = useState([]);
  const getCoordinates = (coordinates) => {
    setCoords(coordinates);
  };
  return (
    <div className="App">
      <Header onGetCoords={getCoordinates} />
      {coords.length > 0 && <Map coords={coords} />}
    </div>
  );
}

export default App;
