import { createContext, useState } from "react";

export const UserContext = createContext(); //createContext() fonksiyonu React'te global veri saklamamıza yarar.
function UserProvider({children}) {
    const [user, setUser] = useState(null); //user → giriş yapan kullanıcıyı saklar. Başlangıçta null (yani kimse giriş yapmamış).setUser → giriş veya çıkış olduğunda kullanıcıyı güncellemek için kullanılır.
  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  ) //UserContext.Provider → içindeki her bileşen bu kullanıcı verisine erişebilir.
}

export default UserProvider