import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
