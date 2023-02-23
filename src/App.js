import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import WeatherPanel from './Components/Tiempo/WeatherPanel';
import FormUpload from './Components/DetailsPage/Form/Form';


function App() {
  return (
    <div className="App">


      <FormUpload />
      <WeatherPanel />
      <FooterContainer /> 

    </div>
  );
}

export default App;
