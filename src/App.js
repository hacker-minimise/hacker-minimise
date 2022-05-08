import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Button/Navbar/Navbar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import Button from "./components/Button/Button";

import "./App.css";
import NewsContainer from "./components/N|ewContainer/NewsContainer";
import NewsItems from "./components/NewsItems/NewsItems";

function App() {
  return (
    <Router>

        <Navbar/>
          <Button />
       

        <NewsContainer>
          <NewsItems />
        </NewsContainer>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
