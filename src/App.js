import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutsUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Destinations from "./Pages/Destinations/Destinations";
import Footer from "./Components/Footer";
import LogIn from "./Pages/LogIn/LogIn";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
