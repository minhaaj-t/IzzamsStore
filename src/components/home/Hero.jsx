import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FALLBACK_IMAGES } from '../../utils/imageHelpers';
import './Hero.css';
import './HeroImageFallback.css';

const Hero = ({ content }) => {
    const heroData = content.find(c => c.section === 'hero') || {
        title: 'Your Pickle - Authentic Traditions',
        content: 'Experience the rich heritage of Malabar through our hand-crafted pickles, chilli powder, lemon and dates. Preservative-free quality from Kerala to Dubai & Qatar.',
        image_url: FALLBACK_IMAGES.hero
    };

    // Use custom banner image
    const heroImage = '/images/banner (2).jpg';

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div
                className="hero-image"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero-badge">100% Traditional Recipe</span>
                    <h1>{heroData.title}</h1>
                    <p>{heroData.content}</p>
                    <div className="hero-btns">
                        <a href="#products" className="btn btn-primary">
                            Explore Shop <ArrowRight size={20} />
                        </a>
                        <a href="#about" className="btn btn-outline">
                            Our Story
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
