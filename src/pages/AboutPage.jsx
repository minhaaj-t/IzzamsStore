import React from 'react';
import { useData } from '../context/DataContext';
import { FALLBACK_IMAGES } from '../utils/imageHelpers';
import { motion } from 'framer-motion';
import { Target, Award, Heart, Users } from 'lucide-react';
import './AboutPage.css';
import '../styles/PageHero.css';

const AboutPage = () => {
    const { loading } = useData();

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>About Us</h1>
                        <p>Discover the story behind IZZAM'S STORE</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={FALLBACK_IMAGES.about} alt="Our Story" />
                    </motion.div>
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="subtitle">Who We Are</span>
                        <h2>About IZZAM'S STORE</h2>
                        <div className="divider"></div>
                        <p>
                            We believe that everyone deserves access to high-quality products at fair and affordable prices. Our online store is built on honesty, quality, and customer satisfaction.
                        </p>
                        <p>
                            Beyond business, we are committed to supporting our country by creating value through ethical sourcing, dependable service, and long-term community development. Every order placed with us helps strengthen local growth and build a better future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section section-padding">
                <div className="container">
                    <motion.div
                        className="vision-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Target size={48} className="vision-icon" />
                        <span className="subtitle">Our Vision</span>
                        <h2>Building Trust, Delivering Quality</h2>
                        <p>
                            Our vision is to become a trusted online store that sets high standards in product quality, fair pricing, and customer service, while playing an active role in supporting our country's economic and social development.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="values-section section-padding">
                <div className="container">
                    <h2 className="text-center">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <Award size={40} />
                            <h3>Quality First</h3>
                            <p>Only the finest products at fair and affordable prices</p>
                        </div>
                        <div className="value-card">
                            <Heart size={40} />
                            <h3>Honesty</h3>
                            <p>Built on transparency and customer satisfaction</p>
                        </div>
                        <div className="value-card">
                            <Users size={40} />
                            <h3>Community</h3>
                            <p>Supporting local growth and community development</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
