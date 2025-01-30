import Headers from "./components/Headers/Headers";
import Heroes from "./components/Hero/Heroes";
import './App.css';
import CompLogos from "./components/Company/CompLogos";
import Residency from "./components/Residencies/Residency";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GettingStarted from "./components/GetStarted/GettingStarted";
import Footer from "./components/Footer/Footer";
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
      <Contact/>
      <GettingStarted/>
      <Footer/>
    </div>
  );
}

export default App;
