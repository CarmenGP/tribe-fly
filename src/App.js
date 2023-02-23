import './App.css';
/* import AboutUs from './Components/AboutUs/AboutUs'; */
import DetailsPage from './Components/DetailsPage/DetailsPage';
import { FooterContainer } from './Components/Footer/Footer';
/* import MainPage from './Components/MainPage/MainPage'; */
/* import MarketplacePage from './Components/MarketplacePage/MarketplacePage'; */
import Navbar from './Components/Navbar/Navbar';


function App() {
  

  return (

    <div className="App">
      <Navbar />
      <DetailsPage/>
      <FooterContainer /> 

    </div>
  );
}

export default App;
