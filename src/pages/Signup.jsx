import { useContext, useState } from 'react';
import { UserContext } from "../context/UserContext"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Lütfen tüm alanları doldurun!!");
      return;
    }
    setUser({ email });
    toast.success("Üyelik başarılı! Hoş geldiniz 😊");
    navigate("/login");
  }

  return (
    <div className="signup-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          placeholder='E-posta'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type='password'
          placeholder='Şifre'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type='submit'>Kayıt Ol</button>
      </form>
    </div>
  )
}

export default Signup;
