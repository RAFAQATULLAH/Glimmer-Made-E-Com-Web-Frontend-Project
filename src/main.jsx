import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import App from './App.jsx'
import Products from '../src/Pages/Products/Products.jsx'
import { Provider } from 'react-redux'
import {store } from './Redux/store.jsx'
import FetchProducts from './Components/FatchProducts/FatchProducts.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import ProductDetails from './Pages/productDetails/productDetails.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'

const Layout = () => (
  <div className="min-h-dvh w-full bg-slate-50 text-blue-950">
    <main className="mx-auto w-[95%] pb-12">
      <Outlet />
    </main>
  </div>
)

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
      <FetchProducts/>
  <BrowserRouter>
    <Routes>
         <Route path="/" element={<App />} />
  <Route path="/products" element={<Products />} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/products/:id" element={<ProductDetails />} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/login" element={<h1>Login</h1>} />
  <Route path="/cart" element={<h1>Cart</h1>} />
  <Route path="/user" element={<h1>User</h1>} />
    </Routes>
  </BrowserRouter>
      </Provider>
)