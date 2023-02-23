import './App.css';
/* import AboutUs from './Components/AboutUs/AboutUs'; */
import DetailsPage from './Components/DetailsPage/DetailsPage';
import { FooterContainer } from './Components/Footer/Footer';
/* import MainPage from './Components/MainPage/MainPage'; */
/* import MarketplacePage from './Components/MarketplacePage/MarketplacePage'; */
import Navbar from './Components/Navbar/Navbar';
import Form from "../src/Components/DetailsPage/Form/Form"


function App() {
  

  return (

    <div className="App">
      <Navbar />
      <DetailsPage/>
      <Form/>
      <FooterContainer /> 

    </div>
  );
}

export default App;
