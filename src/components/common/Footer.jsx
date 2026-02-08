import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <div className="container newsletter-container">
                    <div className="newsletter-content">
                        <h3>Stay Updated with IZZAM'S STORE</h3>
                        <p>Get exclusive offers, new product updates, and recipes!</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="button">
                            Subscribe <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img
                                src="/images/header&footer.png"
                                alt="IZZAM'S STORE"
                                className="footer-logo-img"
                            />
                        </Link>
                        <p>We believe that everyone deserves access to high-quality products at fair and affordable prices. Our store is built on honesty, quality, and customer satisfaction.</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/izzamsstore?igsh=MXQ0ZnhwNnpvNDZlbA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Shop Pickles</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-products">
                        <h3>Products</h3>
                        <ul>
                            <li><Link to="/products">Mango Pickle</Link></li>
                            <li><Link to="/products">Lemon Pickle</Link></li>
                            <li><Link to="/products">Chilli Powder</Link></li>
                            <li><Link to="/products">Mixed Pickle</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <div className="contact-icon"><MapPin size={18} /></div>
                                <span>Kerala, India</span>
                            </li>
                            <li>
                                <div className="contact-icon"><Phone size={18} /></div>
                                <span>+91 884 882 3269</span>
                            </li>
                            <li>
                                <div className="contact-icon"><Mail size={18} /></div>
                                <span>contact@izzamsstore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} IZZAM'S STORE. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
