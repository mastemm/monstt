/* eslint-disable import/no-extraneous-dependencies */
import Navbar from "@components/NavBar";
import Club from "@pages/Club";
import Connexion from "@pages/Connexion";
import Home from "@pages/Home";
import News from "@pages/News";
import Planning from "@pages/Planning";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/club" element={<Club />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
