import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from './context/CartContext';
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import UserProvider from './context/UserContext';
import Login from "./pages/Login";
import Signup  from './pages/Signup';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          {/* Buraya koymak en doğru yer 
          BrowserRouter’ın içinde ,Routes’un dışında ve Navbar’ın altında ya da üstünde olabilir.*/}
          <ToastContainer position='top-right' 
          autoClose={3000}
          transition={Zoom} />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path ='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/checkout' element={<Checkout />} />   
            <Route path='/thank-you' element= {<ThankYou />} /> 
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
