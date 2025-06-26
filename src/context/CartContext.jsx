import { createContext, useState, useEffect } from 'react';
import {toast} from "react-toastify";

export const CartContext = createContext(); // Context nesnesini oluştur. CartContext şimdi oluşturduğumuz, içinde sepet bilgisi taşıyacak olan özel veri alanı.Diğer bileşenlerde bunu useContext(CartContext) şeklinde kullanacağız.

//Bu fonksiyon, tüm uygulamayı sarmalayacak bir context sağlayıcı (provider) bileşen. children bu provider içinde yer alacak tüm bileşenler (yani <App /> içindeki her şey).
export function CartProvider({children}) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart"); // localStorage'da "cart" diye bir veri var mı?
    return storedCart ? JSON.parse(storedCart) : []; // varsa onu kullan, yoksa boş dizi
  }); 
  //useState içine bir fonksiyon verirsek, bu sadece bir kere çalışır (component ilk açıldığında).JSON.parse() ile localStorage'dan gelen "string" veriyi tekrar diziye çeviriyoruz.Böylece uygulama her başladığında sepet doluysa, o doluluğu geri yüklemiş oluyoruz.
  //Sepet verisini tutacak state. cartItems sepetteki ürünleri tutan dizi.Başlangıçta boş [], çünkü sepet boş.setCartItems sepete ürün eklemek veya silmek için kullanılır.

  const removeFromCart = (id) => {
    const existingProduct = cartItems.find(item => item.id === id); //cartItems dizisinde, id’si parametreyle gelen ürünü arar.Bulursa existingProduct içine atar.Bu sayede o ürünün quantity değerine bakabiliriz.

    if (existingProduct.quantity > 1){
      setCartItems(cartItems.map(
        item => item.id === id ? {...item, quantity: item.quantity - 1}: item
      ));
      toast.info(`${existingProduct.name} ürün adedi azaltıldı.`);
    }
    //Tüm cartItems dizisini dönüyoruz (map).item.id === id olan ürünü bulunca:...item ile tüm özelliklerini koruyoruzsadece quantity’yi 1 azaltıyoruz. Diğer ürünlere dokunmuyoruz.
    else {
      setCartItems(cartItems.filter(item => item.id !== id))
    }
    toast.info(`${existingProduct.name} sepetinizden silindi!!`);
  };
  //removeFromCart(id) sepetteki ürünler arasında id’si eşleşmeyenleri tutar, yani tıklanan ürünü çıkarır.
  //Bu, mevcut sepeti (cartItems) döngüyle dolaşır.item => item.id !== id:Eğer ürünün id'si eşit değilse (!==) → bu ürünü yeni sepete dahil eder.Eğer eşitse → listeden çıkarılır.Yani: Tıklanan ürün dışındakiler tutulur.

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id); // sepette (yani cartItems dizisinde) eklenmek istenen ürün zaten var mı kontrolü yapılıyor.Eğer product.id ile eşleşen bir ürün varsa existingProduct değişkenine atanır.Yoksa undefined olur.

    if(existingProduct) {
      // Eğer aynı ürün varsa, miktarını 1 artır 
      //cartItems listesindeki ürünleri map’leyerek: Eşleşen ürünün quantity (adet) değerini 1 artırır.Diğer ürünlere dokunmadan aynen bırakır....item ile ürünün diğer bilgileri korunur (örneğin name, price vs.)
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
      toast.info(`${product.name} ürün adedi artırıldı.`);
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
      //Var olan cartItems dizisine product'ı ekliyoruz.Eklediğimiz ürünün quantity değeri başlangıçta 1 olarak ayarlanıyor....product sayesinde ürünün tüm özellikleri (id, name, price, image...) korunur.
      toast.success(`${product.name} sepetinize eklendi!!`);
    }
  }

  const clearCart = () => {
    setCartItems([]); //State içindeki sepeti boşalt
    localStorage.removeItem("cart"); //Tarayıcıdan da sil
  };

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cartItems));
  }, [cartItems]);
  //useEffect, cartItems her değiştiğinde çalışır.Yeni cartItems dizisini localStorage'a string olarak kaydederiz.JSON.stringify() ile diziyi string'e çeviriyoruz çünkü localStorage sadece düz metin tutabilir. 

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ));
  }

  const decreaseQuantity = (id) => {
    const existingProduct = cartItems.find(item => item.id === id)
    if (existingProduct.quantity > 1) {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ));
  } else {
    setCartItems(cartItems.filter(item => item.id !== id));
  }
}

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  )
  //Provider bileşenini döndür. CartContext.Provider tüm uygulamaya cartItems ve addToCart'ı sunar.value={{ cartItems, addToCart }} Context’ten erişilebilecek veriler.children Provider'ın sarmaladığı bileşenler burada çalışır.

  //Context Provider oluşturduk.Provider’ı App.jsx’te sarmalayarak uygulama genelinde cartItems ve addToCart() fonksiyonuna erişebiliriz.
}