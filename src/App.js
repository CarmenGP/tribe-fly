import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';

function App() {
  return (
    <div className="App">
    
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
