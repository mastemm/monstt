import Navbar2 from "@components/NavBar2";
import Club from "@pages/Club";
import Connexion from "@pages/Connexion";
import Home from "@pages/Home";
import News from "@pages/News";
import Planning from "@pages/Planning";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar2 />
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
