"use client";
import { createContext, useState, useEffect, useRef } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const hasMounted = useRef(false);

	useEffect(() => {
		const saved = localStorage.getItem("cart");
		if (saved) {
			try {
				setCart(JSON.parse(saved));
			} catch {}
		}
	}, []);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

	const increaseQty = (id) => setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));

	const decreaseQty = (id) => setCart((prev) => prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));

	const clearCart = () => setCart([]);

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}>{children}</CartContext.Provider>;
}
