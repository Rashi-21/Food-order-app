import React, { useContext, useEffect } from 'react'
import CartIcon from './CartIcon'
import CartContext from './Cart-Context'
import '../components/HeaderCartButton.css'

function HeaderCartButton (props) {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const  btnClasses ='button bump'

  useEffect(() => {}, [])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton
