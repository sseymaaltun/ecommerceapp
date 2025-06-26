import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Stil dosyasını import et

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2 className="profile-title">🙍‍♀️ / 🙍‍♂️ Profil Sayfası</h2>
      <p className="profile-info">
        <strong>Kullanıcı:</strong> {user.email}
      </p>
      <button className="logout-button" onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
}

export default Profile;
