import React, { useContext, useEffect, useState } from 'react'
import CartIcon from './CartIcon'
import CartContext from './Cart-Context'
import classes from '../components/HeaderCartButton.module.css'

function HeaderCartButton (props) {
  const  [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const  btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton
