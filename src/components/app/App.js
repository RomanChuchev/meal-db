import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header";
import { Home } from "../../pages/Home";
import Footer from "../Footer";
import { Category } from "../../pages/Category";
import { Recipe } from "../../pages/Recipe";

function App() {
  return (
    <Router basename="/meal-db">
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
