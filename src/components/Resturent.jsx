import React from 'react'

function Resturent({resturents}) {
  return (
    <div className="card" key={resturents.id}>
            <img width="254" height="160px" src={resturents.image} />
            <div className="restaurant-details">
                <div className="restaurant-title">{resturents.name}</div>
                <div className="restaurant-subtitle">
                    {resturents.category.join(", ")}
                    {/* North India, Punjabi, Chinese, Thalis Combo, Beverages  */}
                    </div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i>{resturents.rating}
                </div>
                 .<div className="restaurant-delivery-timings"> {`${resturents.delivery}  mins`}</div> .
                <div className="restaurant-cost-for-two">{resturents.cost}</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">{resturents.offer.join(" | ")}</span>
            </div>
        </div>
  )
}

export default Resturent
