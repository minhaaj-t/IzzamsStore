import React from 'react';
import { useData } from '../context/DataContext';
import ProductGrid from '../components/products/ProductGrid';
import { motion } from 'framer-motion';
import './ProductsPage.css';
import '../styles/PageHero.css';

const ProductsPage = () => {
    const { products, loading } = useData();

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="products-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Products</h1>
                        <p>Explore our complete range of authentic pickles, chilli powder, lemon and dates</p>
                    </motion.div>
                </div>
            </section>

            <ProductGrid products={products} />
        </div>
    );
};

export default ProductsPage;
