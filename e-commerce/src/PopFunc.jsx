import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function PopFunc({ productImageUrl, price, title, cardImage, votes}) {

    const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
console.log( {votes} );
    return (
        <div className="contaner">
            <div className="popProductImg">
                <img src={productImageUrl} className="Product-Image rounded" alt="logo" />
            </div>
            <div className="textbox">
                <p className="bluetext">{title}</p>
                <p className="price">${price}</p>
                <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={votes}
        
        /* Available Props */
      />
            </div>
            <div>
                <img src={cardImage} className="cardImage" alt="logo" />
            </div>
        </div>
    )
}
export default PopFunc





