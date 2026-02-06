import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openCart, getCartCount } = useCart();
    const location = useLocation();

    // Check if on homepage
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine navbar style based on page and scroll
    const navbarClass = `navbar ${isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'solid' : ''}`;

    return (
        <nav className={navbarClass}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img
                        src="/images/header&footer.png"
                        alt="IZZAM'S STORE"
                        className="logo-img"
                    />
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>

                <div className="nav-actions">
                    <button className="cart-btn" onClick={openCart}>
                        <ShoppingBag size={24} />
                        {getCartCount() > 0 && (
                            <span className="cart-count">{getCartCount()}</span>
                        )}
                    </button>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
