
import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Navbar/Nav'
import ProductsContainer from './Components/ProductsContainer/ProductsContainer'


function App() {


  return (
    <>
    <div>
      <Nav/>
      <Hero/>
      <ProductsContainer heading="New Arrivals"/>
      <ProductsContainer heading="Top Sellings"/>
      <Footer/>
    </div>
    </>
  )
}

export default App
