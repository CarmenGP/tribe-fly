import './App.css';
import { FooterContainer } from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import MarketplacePage from './Components/MarketplacePage/MarketplacePage';
import Navbar from './Components/Navbar/Navbar';

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
