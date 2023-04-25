import React from 'react'
import '../components/Card.css'

function Card (props) {
  return(
    <div className='card'>{props.children}</div>  
    
  )  
}

export default Card
