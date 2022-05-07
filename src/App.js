import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import Button from "./components/Button";

import "./App.css";
import NewsContainer from "./components/NewsContainer";

function App() {

  


  

  return (
    <Router>
      <Navbar />
      <NewsContainer />
      <Button />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
