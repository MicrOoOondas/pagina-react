import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const getInitialCart = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getInitialCart());
    const [confirmation, setConfirmation] = useState({
        show: false,
        message: '',
        onConfirm: () => {}
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        const itemToDecrease = cartItems.find(item => item.id === productId);

        if (itemToDecrease && itemToDecrease.quantity === 1) {
            setConfirmation({
                show: true,
                message: `¿Estás seguro de que quieres eliminar "${itemToDecrease.name}" del carrito?`,
                onConfirm: () => removeFromCart(productId)
            });
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }
    };
    
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const value = {
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        confirmation,
        setConfirmation
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
