import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Artistes from "./pages/Artistes";
import Music from "./pages/Music";
import Booking from "./pages/Booking";



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artistes" element={<Artistes/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/booking" element={<Booking/>} />
        </Routes>
    </BrowserRouter>
   
   
  );
};

export default App
