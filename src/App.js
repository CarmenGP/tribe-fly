import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Weather/WeatherPanel';
import DarkVariantExample from './Components/Slider/slider'
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <FooterContainer /> 
    </div>
  );
}

export default App;
