import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart';
import CartProvider from './components/CartProvider';

function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
