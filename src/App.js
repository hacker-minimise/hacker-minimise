import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Navbar} from "./components/Navbar";

import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about"
          element={  <AboutPage />}/>
      <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    </Router>
  );
}


export default App;
