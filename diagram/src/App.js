import "./App.css";
import Nav from "./components/NavComponents";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure to import BrowserRouter as Router or other router types

function App() {
  return (
    <Router>
      <>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
