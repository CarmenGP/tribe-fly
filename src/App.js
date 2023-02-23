import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import DarkVariantExample from './Components/Slider/slider';
import WeatherPanel from './Components/Weather/WeatherPanel';

function App() {
  return (
    <div className="App">
      <DarkVariantExample/>
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
