import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductImage } from '../../utils/imageHelpers';
import './CartSidebar.css';

const CartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        closeCart,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart
    } = useCart();

    const handleWhatsAppOrder = () => {
        if (cartItems.length === 0) return;

        const orderText = cartItems.map(item =>
            `• ${item.product_name} (${item.weight}) x${item.quantity} - ₹${(parseFloat(item.price) * item.quantity).toFixed(2)}`
        ).join('\n');

        const total = getCartTotal().toFixed(2);

        const message = `🛒 *New Order from IZZAM'S STORE*\n\n${orderText}\n\n*Total: ₹${total}*\n\nPlease confirm my order!`;

        const whatsappUrl = `https://wa.me/918848823269?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`} onClick={closeCart} />
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3><ShoppingBag size={24} /> Your Cart</h3>
                    <button className="close-cart-btn" onClick={closeCart}>
                        <X size={24} />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <ShoppingBag size={64} />
                        <p>Your cart is empty</p>
                        <span>Add some delicious pickles!</span>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.product_id}>
                                    <img
                                        src={getProductImage(item.product_name, item.image_url)}
                                        alt={item.product_name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-details">
                                        <h4>{item.product_name}</h4>
                                        <p className="cart-item-weight">{item.weight}</p>
                                        <p className="cart-item-price">₹{item.price}</p>
                                    </div>
                                    <div className="cart-item-actions">
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)}>
                                                <Minus size={16} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)}>
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button className="remove-item-btn" onClick={() => removeFromCart(item.product_id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total</span>
                                <strong>₹{getCartTotal().toFixed(2)}</strong>
                            </div>
                            <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Order via WhatsApp
                            </button>
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
