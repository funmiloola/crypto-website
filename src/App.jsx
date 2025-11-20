import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coins/Coin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full px-0 min-h-screen text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] ">
      <Navbar />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
