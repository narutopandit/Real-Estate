import Headers from "./components/Headers/Headers";
import Heroes from "./components/Hero/Heroes";
import './App.css';
import CompLogos from "./components/Company/CompLogos";
import Residency from "./components/Residencies/Residency";
import Value from "./components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Headers/>
        <Heroes/>
      </div>
      <CompLogos/>
      <Residency/>
      <Value/>
    </div>
  );
}

export default App;
