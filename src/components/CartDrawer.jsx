import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";

function CartDrawer({ isOpen, closeCart }) {

  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={closeCart}
      ></div>

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={closeCart}>
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">

          {cart.length === 0 && (
            <p className="empty-cart">Your cart is empty</p>
          )}

          {cart.map((item) => (

            <div key={item.id} className="cart-item">

              <img
                src={item.images ? item.images[0] : item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h4>{item.name}</h4>

                <p>₹{item.price}</p>

                <div className="qty-controls">

                  <button
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        {/* Footer */}
        <div className="cart-footer">

          <div className="cart-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            disabled={cart.length === 0}
            onClick={() => {
              closeCart();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}

export default CartDrawer;