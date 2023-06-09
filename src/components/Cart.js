import React, {useContext, useState} from 'react'
import '../components/Cart.css'
import Modal from './Modal';
import CartContext from './Cart-Context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart (props) {
  const [ ischeckout, setIsCheckout ] = useState(false)

  const[isSubmitting, setIsSubmitting] = useState(false)

  const[didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const  cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://food-order-app-21-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

    const cartItems = <ul className='cart-items'>{cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>;
  
    const modalActions = <div className='action'>
    <button className='button--alt' onClick={props.onClose}>Close</button>
    {hasItems && <button className='button' onClick={orderHandler}>Order</button>}
</div>

    const cartModalContent = (<React.Fragment>
      {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {ischeckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        {!ischeckout && modalActions }
    </React.Fragment>)

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSumbitModalContent = <React.Fragment><p>Successfully sent the order!</p>
    <div className='action'>
    <button className='button' onClick={props.onClose}>Close</button>
    </div>
    </React.Fragment>

    return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSumbitModalContent}     
    </Modal>
  )
}

export default Cart
