import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Scale, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductImage, handleImageError } from '../../utils/imageHelpers';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    };

    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="product-image-wrapper">
                <img
                    src={getProductImage(product.product_name, product.image_url)}
                    alt={product.product_name}
                    className="product-image"
                    onError={(e) => handleImageError(e, product.product_name)}
                />
                <div className="product-badge">{product.category}</div>
                <Link to={`/product/${product.product_id}`} className="view-details-overlay">
                    <span>View Details</span>
                    <ArrowUpRight size={20} />
                </Link>
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.product_name}</h3>
                <p className="product-short-desc">{product.short_description}</p>

                <div className="product-meta">
                    <div className="product-price">₹{product.price}</div>
                    <div className="product-weight">
                        <Scale size={14} />
                        <span>{product.weight}</span>
                    </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
