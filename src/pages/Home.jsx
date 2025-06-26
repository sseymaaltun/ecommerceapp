import ProductCard from "../components/ProductCard";
import products from "../database/products";
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="product-title">🛒 Alışverişe Başla</h1>
      <div className="product-grid"> 
        {/* product={ { id: 1, name: "Ürün A", price: 200 } } */}
        {
          products.map(product => (<ProductCard key={product.id} product={product} />))  
        }
      </div>
    </div>
  );
}

export default Home