import React from 'react';
import { useData } from '../context/DataContext';
import { FALLBACK_IMAGES } from '../utils/imageHelpers';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/products/ProductGrid';
import '../components/home/AboutSectionBg.css';
import './HomePage.css';

const HomePage = () => {
    const { products, static: staticContent, loading, error } = useData();

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container container">
                <h2>Oops! Something went wrong.</h2>
                <p>We couldn't load the products. Please try again later.</p>
            </div>
        );
    }

    const aboutContent = staticContent.find(c => c.section === 'about') || {
        title: 'Our Malabar Heritage',
        content: 'IZZAM\'S STORE brings you "Your Pickle" - a brand built on traditional recipes passed down through generations in the Malabar region. From Kerala to Dubai and Qatar, every jar represents our commitment to authentic taste, quality ingredients, and preservative-free goodness. We proudly serve Calicut, Kannur, and communities worldwide with our range of pickles, chilli powder, lemon and dates.',
        image_url: FALLBACK_IMAGES.about
    };

    const aboutImage = aboutContent.image_url || FALLBACK_IMAGES.about;

    return (
        <div className="home-page">
            <Hero content={staticContent} />

            <ProductGrid products={products} />

            <section className="about-section section-padding" id="about">
                <div className="container about-grid">
                    <div className="about-image">
                        <img src={aboutImage} alt="Our Story" />
                    </div>
                    <div className="about-content">
                        <span className="subtitle">The Story Behind</span>
                        <h2>{aboutContent.title}</h2>
                        <div className="divider"></div>
                        <p>{aboutContent.content}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
