import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import MarketplacePage from './Components/MarketplacePage/MarketplacePage';

function App() {
  

  return (

    <div className="App">
      <Navbar />
      <MainPage />
      <MarketplacePage />
      <FooterContainer /> 
    </div>
  );
}

export default App;
