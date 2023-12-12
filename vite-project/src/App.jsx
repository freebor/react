import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/inner-pages/About"
import Home from "./pages/HomePages"
import ProductListPages from "./pages/ProductListPages"
import ProductPages from "./pages/ProductPage"
import { ShoppingCart } from "./pages/ShoppingCart"
import { Pricing } from "./pages/inner-pages/Pricing"
import { HOME, ABOUT, PRICING, PRODUCTLISTPAGES, PRODUCTPAGES, CART } from "./component/routes"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<Home />}/>
        <Route path={ABOUT} element={<About />}/>
        <Route path={PRICING} element={<Pricing />}/>
        <Route path={PRODUCTLISTPAGES} element={<ProductListPages />}/>
        <Route path={PRODUCTPAGES} element={<ProductPages />}/>
        <Route path={CART} element={<ShoppingCart />}/>
      </Routes>
    </Router>
  )
}

export default App