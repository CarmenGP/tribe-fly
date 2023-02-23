import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Weather/WeatherPanel';
import DarkVariantExample from './Components/Slider/slider'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DarkVariantExample />
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
