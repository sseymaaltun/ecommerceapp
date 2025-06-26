import { Link } from "react-router-dom";
import "../components/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { user, setUser} = useContext(UserContext);
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '10px' }} />TeknolojiKutusu</Link>
        
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Anasayfa</Link>
            <Link to="/cart" className="navbar-link">Sepet ({totalQuantity})</Link>
            <Link to="/checkout" className="navbar-link">Ödeme</Link>
            <Link to="/orders" className="navbar-link">Siparişlerim</Link>
            <Link to="/signup" className="navbar-button">Kayıt Ol</Link>
            {
              user ?(
                <>
                  <span className="navbar-link"><FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />{user.email}</span>
                  <button
                  onClick={() => setUser(null)}
                  className="navbar-button">Çıkış yap</button>
                </>
              ) : (<Link to={"/login"} className="navbar-button">Giriş yap</Link>)
            }
        </div>
    </nav>
  )
}

export default Navbar

