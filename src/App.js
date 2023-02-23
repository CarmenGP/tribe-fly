import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import { FooterContainer } from './Components/Footer/Footer';
import DarkVariantExample from './Components/Slider/slider';
import WeatherPanel from './Components/Weather/WeatherPanel';
import DarkVariantExample from './Components/Slider/slider'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DarkVariantExample />
      <AboutUs />
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
