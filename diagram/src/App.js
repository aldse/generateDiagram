import "./App.css";
import AddArq from "./pages/AddArq";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure to import BrowserRouter as Router or other router types

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<AddArq />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
