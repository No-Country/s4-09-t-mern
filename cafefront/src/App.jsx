import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Map } from "./components/Map";
import NavBar from "./components/Nabvar/NavBar";
import Home from "./Link.jsx/Home";
import Ranking from "./Link.jsx/Ranking";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="inicio" element={<Home />}></Route>
        <Route path="ranking" element={<Ranking/>}></Route>
      </Routes>

      <header className="row">
        <NavBar />
      </header>
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;
