import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/inner-pages/about"
import Home from "./pages/HomePages"
import ProductListPages from "./pages/ProductListPages"
import ProductPages from "./pages/ProductPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/productList" element={<ProductListPages />}/>
        <Route path="/productPage" element={<ProductPages />}/>
      </Routes>
    </Router>
  )
}

export default App