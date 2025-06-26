import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p className="empty-cart">🛒 Sepetiniz boş.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🧺 Sepetiniz</h2>
      <ul className="cart-list">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span><strong>{item.name}</strong> x {item.quantity}</span>
            <span>{item.price * item.quantity} TL</span>
            <div className="cart-buttons">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)} className="delete-btn">Sil</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p><strong>Toplam Fiyat:</strong> {totalPrice} TL</p>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-btn">Sepeti Boşalt</button>
          <Link to="/checkout">
            <button className="checkout-btn">Ödemeye Geç</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
