import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "../src/Components/footer/Footer.jsx";
import WebService from "./Pages/Service/webservice/WebService.jsx";
import AppService from "./Pages/Service/AppService/AppService.jsx";
import Digital from "./Pages/Service/Digital/Digital.jsx";
import DataScience from "./Pages/Service/DataScience/DataScience.jsx";
import Ai from './Pages/Service/Artificial Intelligence/AI.jsx'
import Software from "./Pages/Service/Software/Software.jsx";
import ContactUs from "./Components/Contact us/ContactUs.jsx";
import ContactUsPage from "./Pages/contactUs Page/ContactUsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebService />} />
        <Route path="/app" element={<AppService />} />
        <Route path="/digital" element={<Digital/>}/>
        <Route path='/datascience' element={<DataScience/>}/>
        <Route path="/software" element={<Software/>}/>
        <Route path='/ai' element={<Ai/>}/>
        <Route path="/contact-us" element={<ContactUsPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
