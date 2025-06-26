import { useParams } from "react-router-dom";
import products from "../database/products";
import "./ProductDetail.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(urun => urun.id === parseInt(id)); /* products.find(...): Tüm ürünler arasında arama yapar. p.id === parseInt(id): URL’den gelen id string olduğu için sayıya çeviriyoruz ve eşleşen ürünü buluyoruz.*/ 

    const { addToCart } = useContext(CartContext); // context'ten fonksiyonu al

    if (!product) {
        return <p>Ürün bulunamadı.</p>;
    }

  return (
    <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
            <h2>{product.name}</h2>
            <p className="product-price">{product.price} TL</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Sepete Ekle</button>
        </div>
    </div>
  )
}

export default ProductDetail