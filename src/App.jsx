import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"
import { Routes, Route } from "react-router-dom"
import ViewProductPage from "./pages/ViewProductPage"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <div style={{width: "100vw"}}>
      <Navbar/>
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/view-product" element={<ViewProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
