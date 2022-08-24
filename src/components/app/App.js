import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header";
import { Home } from "../../pages/Home";
import Footer from "../Footer";
import { Category } from "../../pages/Category";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
