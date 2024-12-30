import Headers from "./components/Headers/Headers";
import Heroes from "./components/Hero/Heroes";
import './App.css';
import CompLogos from "./components/Company/CompLogos";
import Residency from "./components/Residencies/Residency";
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
    </div>
  );
}

export default App;
