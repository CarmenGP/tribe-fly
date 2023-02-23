import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import { FooterContainer } from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import MarketplacePage from './Components/MarketplacePage/MarketplacePage';
import Navbar from './Components/Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AboutUs from './Components/AboutUs/AboutUs';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <><Navbar /><MainPage /></>
  }, {
    path: "/Descubre",
    element: <><Navbar /><MarketplacePage /></>
  }, {
    path: "/SobreNosotros",
    element: <><Navbar /><AboutUs /></>
  }])

  return (
    <div className="App">
      <RouterProvider router={router} />
      <FooterContainer /> 

    </div>
  );
}

export default App;
