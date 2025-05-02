import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../src/assets/image/css/style.css";
import "../src/assets/image/css/products.css";
import "../src/assets/image/css/login.css";
import "../src/assets/image/css/cart.css";
import "../src/assets/image/css/producthomepage.css";
import "../src/assets/image/css/mode.css";
import "./sass/contact.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider } from 'react-use-cart'
import { LangProvider } from './context/LangContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </LangProvider>
  </StrictMode>
)
