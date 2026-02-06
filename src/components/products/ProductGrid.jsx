import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <section className="product-section section-padding" id="products">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Handpicked Collection</span>
                    <h2>Our Pickle Varieties</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="no-products text-center">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
