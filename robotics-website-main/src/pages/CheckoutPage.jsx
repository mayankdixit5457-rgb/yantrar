import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {

  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <section className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-layout">

        {/* ORDER SUMMARY */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div key={item.id} className="summary-item">

              <span>{item.name}</span>

              <span>
                {item.quantity} × ₹{item.price}
              </span>

            </div>

          ))}

          <div className="summary-total">

            <strong>Total</strong>

            <strong>₹{total}</strong>

          </div>

        </div>

        {/* SHIPPING FORM */}

        <div className="checkout-form">

          <h2>Shipping Details</h2>

          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Phone Number" />
          <input placeholder="Address" />
          <input placeholder="City" />
          <input placeholder="Pincode" />

          <button onClick={handleOrder}>
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
};

export default CheckoutPage;