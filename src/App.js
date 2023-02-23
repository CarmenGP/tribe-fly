import './App.css';
import DefaultCard from './Components/DefaultCard/DefaultCard';
import { FooterContainer } from './Components/Footer/Footer';
import MarketplacePage from './Components/MarketplacePage/MarketplacePage';
import WeatherPanel from './Components/Tiempo/WeatherPanel';

function App() {
  

  return (

    <div className="App">
      <MarketplacePage />
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
