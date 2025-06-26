import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, [user, navigate]);

  const handleCancel = (id) => {
    const confirmed = window.confirm("Bu siparişi iptal etmek istediğinize emin misiniz?");
    if (!confirmed) return;

    const filtered = orders.filter(order => order.id !== id);
    setOrders(filtered);

    const stored = JSON.parse(localStorage.getItem("orders")) || [];
    const updated = stored.filter(order => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(updated));

    toast.info("Sipariş iptal edildi.");
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">🧾 Sipariş Geçmişi</h2>
      {
        orders.length === 0 ? (
          <p className="empty-orders">Henüz bir sipariş bulunmamaktadır.</p>
        ) : (
          <ul className="orders-list">
            {
              orders.map((order) => (
                <li className="order-item" key={order.id}>
                  <p><strong>Sipariş No:</strong> #{order.id}</p>
                  <p><strong>İsim:</strong> {order.name}</p>
                  <p><strong>Adres:</strong> {order.address}</p>
                  <p><strong>Tarih:</strong> {order.date}</p>
                  <p><strong>Toplam:</strong> {order.totalPrice} TL</p>
                  <ul className="order-products">
                    {order.cartItems.map((item, index) => (
                      <li key={index}>
                        {item.name} x {item.quantity} - {item.price * item.quantity} TL
                      </li>
                    ))}
                  </ul>
                  <button className="cancel-button" onClick={() => handleCancel(order.id)}>
                    ❌ Siparişi İptal Et
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default Orders;
