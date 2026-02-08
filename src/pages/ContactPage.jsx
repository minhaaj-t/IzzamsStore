import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './ContactPage.css';
import '../styles/PageHero.css';

const ContactPage = () => {
    const phoneNumber = '+918848823269';

    const handleWhatsAppContact = () => {
        const message = "Hello IZZAM'S STORE! I would like to know more about Your Pickle products.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Contact Us</h1>
                        <p>We'd love to hear from you</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Get In Touch</h2>
                        <p className="intro-text">Have questions about our products? Want to place a bulk order? We're here to help!</p>

                        <div className="info-cards">
                            <div className="info-card">
                                <MapPin size={24} />
                                <div>
                                    <h3>Location</h3>
                                    <p>Kerala, India</p>
                                    <p className="sub-text">Serving Calicut, Kannur, Malabar region, Dubai & Qatar</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <Phone size={24} />
                                <div>
                                    <h3>Phone</h3>
                                    <p>+91 884 882 3269</p>
                                    <p className="sub-text">Available for WhatsApp orders</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <Mail size={24} />
                                <div>
                                    <h3>Email</h3>
                                    <p>contact@izzamsstore.com</p>
                                    <p className="sub-text">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <button className="whatsapp-contact-btn" onClick={handleWhatsAppContact}>
                            <Send size={20} />
                            Message Us on WhatsApp
                        </button>
                    </motion.div>

                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="business-hours">
                            <h3>Business Hours</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span>Monday - Saturday</span>
                                    <span>9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="hours-item">
                                    <span>Sunday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-areas">
                            <h3>We Serve</h3>
                            <ul className="areas-list">
                                <li>✓ Kerala (Calicut, Kannur, Malabar)</li>
                                <li>✓ All over India</li>
                                <li>✓ Dubai, UAE</li>
                                <li>✓ Qatar</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
