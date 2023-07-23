import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartInShow, setCartInShow] = useState(false);

  const showCartHandler = () => {
    setCartInShow(true);
  };

  const hideCartHandler = () => {
    setCartInShow(false);
  };

  return (
    <Fragment>
      {cartInShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
