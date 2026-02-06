import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartSidebar from './components/common/CartSidebar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import WhatsAppFAB from './components/common/WhatsAppFAB';
import './index.css';

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <Router>
          <div className="app-wrapper">
            <Navbar />
            <CartSidebar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFAB />
          </div>
        </Router>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
