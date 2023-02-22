import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';
import DarkVariantExample from './Components/Slider/slider';

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
