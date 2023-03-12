import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Gallary from "./pages/Gallary";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
