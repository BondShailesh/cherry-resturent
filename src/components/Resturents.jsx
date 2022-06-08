import React from 'react'
import Resturent from './Resturent'

function Resturents(props) {
  return (
    <div className="container divider">
    <div className="cards">
    {props.resturents.map((resturents)=>(
        <Resturent key={resturents.id} resturents={resturents}/>
        ))}
        
    </div>
</div>
  )
}

export default Resturents
