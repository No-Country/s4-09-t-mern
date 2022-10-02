import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Map } from "./components/Map";
import NavBarDesktop from "./components/Nabvar/NavBarDesktop";
import NavBar from "./components/Nabvar/NavBarDesktop";
import NavbarMobile from "./components/Nabvar/NavbarMobile";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header >
          <div className="col-12 d-none d-lg-block ">
          <NavBarDesktop />
          </div>
          <div className="col-12 d-lg-none d-md-block">
             <NavbarMobile/> 
          </div>
         
      
        </header>
        <main>
          <Map />
        </main>
      </div>
    </div>
  );
}

export default App;
