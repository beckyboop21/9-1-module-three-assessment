import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Nav from "./Navbar";
import Movies from "./Movies";
import People from "./People";
import Locations from "./Locations";
import "./index.css"

function App() {
  return (
    
    <Router>
      <div className="app">
        <Nav/>
     </div>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/People" element={<People/>} />
      <Route path="/Locations" element={<Locations />} />
     </Routes>
    </Router>
  );
}

export default App;