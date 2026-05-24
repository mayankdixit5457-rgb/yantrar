"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import "./CartDrawer.css";

export default function CartDrawer({ isOpen, closeCart }) {
	const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
	const router = useRouter();

	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<>
			<div className={`cart-overlay ${isOpen ? "show" : ""}`} onClick={closeCart}></div>
			<div className={`cart-drawer ${isOpen ? "open" : ""}`}>
				<div className="cart-header">
					<h2>Your Cart</h2>
					<button className="close-btn" onClick={closeCart}>
						✕
					</button>
				</div>

				<div className="cart-items">
					{cart.length === 0 && <p className="empty-cart">Your cart is empty</p>}
					{cart.map((item) => (
						<div key={item.id} className="cart-item">
							<img src={item.images ? item.images[0] : item.image} alt={item.name} />
							<div className="cart-info">
								<h4>{item.name}</h4>
								<p>${item.price}</p>
								<div className="qty-controls">
									<button onClick={() => decreaseQty(item.id)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increaseQty(item.id)}>+</button>
								</div>
							</div>
							<button className="remove-btn" onClick={() => removeFromCart(item.id)}>
								Remove
							</button>
						</div>
					))}
				</div>

				<div className="cart-footer">
					<div className="cart-total">
						<span>Total</span>
						<span>${total}</span>
					</div>
					<button
						className="checkout-btn"
						onClick={() => {
							closeCart();
							router.push("/checkout");
						}}
						disabled={cart.length === 0}
					>
						Proceed to Checkout
					</button>
				</div>
			</div>
		</>
	);
}
