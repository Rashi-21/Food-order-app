import React, {Fragment} from 'react'
import MealImage from "../assets/meals.jpg"
import '../components/Header.css'
import HeaderCartButton from './HeaderCartButton'

function Header (props) {
  return (
    <Fragment>
        <header className='header'>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className='main-image' >
          <img src={MealImage}  alt='A table full of delicious food' />
        </div>
      
    </Fragment>
  )
}

export default Header;