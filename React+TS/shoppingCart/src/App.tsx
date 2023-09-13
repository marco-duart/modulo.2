import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CartProvider } from "./contexts/CartProvider"
import products from './assets/products.json'
import GlobalStyle from "./assets/styles/globalStyle"

function App() {
  return (
    <>
    <GlobalStyle />
      <CartProvider>
        <Header />
        <ProductList products={products} />
        <Cart products={products} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
