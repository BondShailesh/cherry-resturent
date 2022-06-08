import React from 'react'
import offer1 from '../assets/offer1.jpeg'
import offer2 from '../assets/offer2.jpeg'
import offer3 from '../assets/offer3.jpeg'
import offer4 from '../assets/offer4.jpeg'
function Offers(props) {
  return (
    <section className="offers">
    <div className="container">
      {props.offer.map((el,index)=>(
        <img key={index} className="offer" src={el}/>
      ))}
       
    </div>
</section>
  )
}

export default Offers
