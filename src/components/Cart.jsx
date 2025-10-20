import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { products } from '../data/productos.js';
import ProductCard from './ProductCard.jsx';
import '../css/Cart.css';

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const recommendedProducts = products.filter(p => !cartItems.some(item => item.id === p.id)).slice(0, 3);

    const handleCheckout = () => {
        alert('¡Artículos comprados con éxito!');
        clearCart();
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1 className="cart-title">Tu Carrito de Compras</h1>
                {cartItems.length === 0 ? (
                    <p className="cart-empty-message">Tu carrito está vacío.</p>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.img} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <p className="cart-item-price">${item.price.toLocaleString('es-CL')}</p>
                                    </div>
                                    <div className="cart-item-quantity"> 
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <p className="cart-item-subtotal">
                                        ${(item.price * item.quantity).toLocaleString('es-CL')}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2 className="summary-title">Resumen del Pedido</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toLocaleString('es-CL')}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${subtotal.toLocaleString('es-CL')}</span>
                            </div>
                            <button className="checkout-button" onClick={handleCheckout}>Proceder a la Compra</button>
                        </div>
                    </div>
                )}

                <section className="recommended-products">
                    <h2 className="recommended-title">También te podría interesar</h2>
                    <div className="recommended-grid">
                        {recommendedProducts.map(prod => (
                            <ProductCard key={prod.id} product={prod} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Cart;
