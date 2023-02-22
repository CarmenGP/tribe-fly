import './App.css';
import DefaultCard from './Components/DefaultCard/DefaultCard';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';

function App() {
  return (
    <div className="App">
      <DefaultCard type="category" info="Pueblos Rurales" img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg"/>
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
