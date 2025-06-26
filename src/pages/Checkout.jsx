import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      toast.info("Sepetiniz boş!. Anasayfaya yönlendiriliyorsunuz.");
      navigate("/");
    }
  }, [cartItems, navigate]);

  const [form, setForm] = useState({
    name: "",
    address: "",
    card: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.card) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }

    toast.success("Ödeme başarılı! Teşekkür ederiz.");

    const newOrder = {
      id: Date.now(),
      name: form.name,
      address: form.address,
      cartItems,
      totalPrice,
      date: new Date().toLocaleString()
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    navigate("/thank-you", {
      state: {
        name: form.name,
        address: form.address,
        cartItems,
        totalPrice,
      },
    });

    setTimeout(() => {
      clearCart();
      setForm({ name: "", address: "", card: "" });
    }, 100);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">💳 Ödeme Sayfası</h2>
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Ad Soyad' value={form.name} onChange={handleChange} />
          <input type='text' name='address' placeholder='Adres' value={form.address} onChange={handleChange} />
          <input type='text' name='card' placeholder='Kart Numarası' value={form.card} onChange={handleChange} />
          <button type='submit'>Ödemeyi Tamamla</button>
        </form>

        <div className="checkout-summary">
          <h3>🛒 Sepet Özeti</h3>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.name} x {item.quantity} = {item.price * item.quantity} TL
              </li>
            ))}
          </ul>
          <p className="checkout-total">Toplam: <strong>{totalPrice} TL</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
