import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./ThankYou.css";

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, address, cartItems, totalPrice } = location.state || {};

  useEffect(() => {
    if (!name || !address || !cartItems || cartItems.length === 0) {
      navigate("/");
    }
  }, [name, address, cartItems, navigate]);

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="thankyou-container">
      <h2>🎉 Siparişiniz Başarıyla Alındı, {name}!</h2>
      <p><strong>Sipariş numaranız:</strong> #{orderNumber}</p>
      <p><strong>Adres:</strong> {address}</p>
      <p>En kısa sürede kargoya verilecektir. Teşekkür ederiz 🙏</p>

      <div className="thankyou-summary">
        <h2>Sipariş Özeti:</h2>
        <ul>
          {cartItems?.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} - {item.price} * {item.quantity} TL
            </li>
          ))}
        </ul>
        <p><strong>Toplam Tutar: </strong>{totalPrice} TL</p>
      </div>

      <Link to="/" className="back-home-link">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default ThankYou;
