import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartInShow, setCartInShow] = useState(false);

  const showCartHandler = () => {
    setCartInShow(true);
  };

  const hideCartHandler = () => {
    setCartInShow(false);
  };

  return (
    <CartProvider>
      {cartInShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
