import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useCart } from '../context/CartContext';
import { getProductImage, handleImageError } from '../utils/imageHelpers';
import { ShoppingCart, ArrowLeft, Info, Calendar, ShieldCheck, Scale, Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const { products, details, loading } = useData();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!loading && products.length > 0) {
            const foundProduct = products.find(p => p.product_id === id);
            const foundDetails = details.find(d => d.product_id === id);
            setProduct(foundProduct);
            setProductDetails(foundDetails);
            // Reset selected image when product changes
            setSelectedImage(null);
            window.scrollTo(0, 0);
        }
    }, [id, products, details, loading]);

    if (loading || !product) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    // Parse additional images from comma-separated string
    const additionalImages = productDetails?.additional_images
        ? productDetails.additional_images.split(',').map(img => img.trim()).filter(img => img.length > 0)
        : [];

    // Get the main product image
    const mainProductImage = getProductImage(product.product_name, product.image_url);

    // Current displayed image (selected or default main image)
    const displayedImage = selectedImage || mainProductImage;

    return (
        <div className="product-details-page">
            <div className="container">
                <Link to="/products" className="back-link">
                    <ArrowLeft size={20} /> Back to Shop
                </Link>

                <div className="details-grid">
                    <motion.div
                        className="details-gallery"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="main-image-container">
                            <img
                                src={displayedImage}
                                alt={product.product_name}
                                className="main-image"
                                onError={(e) => handleImageError(e, product.product_name)}
                            />
                        </div>
                        {additionalImages.length > 0 && (
                            <div className="additional-images">
                                {/* Main product image thumbnail */}
                                <img
                                    src={mainProductImage}
                                    alt={product.product_name}
                                    className={displayedImage === mainProductImage ? 'active' : ''}
                                    onClick={() => setSelectedImage(null)}
                                    onError={(e) => handleImageError(e, product.product_name)}
                                />
                                {/* Additional images thumbnails */}
                                {additionalImages.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${product.product_name} ${idx + 1}`}
                                        className={displayedImage === img ? 'active' : ''}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        className="details-content"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="category-tag">{product.category}</span>
                        <h1 className="product-title">{product.product_name}</h1>
                        <div className="product-price-meta">
                            <span className="price">₹{product.price}</span>
                            <span className="weight-badge"><Scale size={16} /> {product.weight}</span>
                        </div>

                        <p className="full-description">
                            {productDetails?.full_description || product.short_description}
                        </p>

                        <div className="specs-grid">
                            <div className="spec-item">
                                <Info size={20} />
                                <div>
                                    <strong>Ingredients</strong>
                                    <span>{productDetails?.ingredients || 'Natural ingredients'}</span>
                                </div>
                            </div>
                            <div className="spec-item">
                                <Calendar size={20} />
                                <div>
                                    <strong>Shelf Life</strong>
                                    <span>{productDetails?.shelf_life || '6 Months'}</span>
                                </div>
                            </div>
                            <div className="spec-item">
                                <ShieldCheck size={20} />
                                <div>
                                    <strong>Storage</strong>
                                    <span>{productDetails?.storage_instructions || 'Store in a cool, dry place'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-actions">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={18} /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}><Plus size={18} /></button>
                            </div>

                            <button className="add-to-cart-btn-lg" onClick={handleAddToCart}>
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                        </div>

                        <div className="trust-badges">
                            <span>✓ High Quality</span>
                            <span>✓ No Preservatives</span>
                            <span>✓ Authentic Taste</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
