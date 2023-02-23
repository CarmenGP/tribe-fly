import './App.css';
import DefaultCard from './Components/DefaultCard/DefaultCard';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';

function App() {
  const arr = [{
    title: "Barcelona",
    description: "Tour de una tarde por el centro"
  }, {
    title: "Valencia",
    description: "4 días del 1/03 - 4/03 (Fallas)"
  }]

  return (
    <div className="App">
      {arr.map(item => <DefaultCard  type="product" info={item} img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg"/>)}
      <WeatherPanel />
      <FooterContainer /> 
    </div>
  );
}

export default App;
