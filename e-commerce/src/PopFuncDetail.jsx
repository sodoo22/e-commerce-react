import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function PopFuncDetail({
  id,
  productImageUrl,
  price,
  title,
  cardImage,
  votes,
  setShow,
  show,
  showElem,
}) {
  function handleUpVote(proId) {
    // console.log("Clicked");
    console.log(proId);
    showElem(proId);
    // console.log(proId);
  }
  //   console.log(id);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    showElem(id);
    // setShow(show);
  };

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  //   console.log({ votes });
  return (
    <div>
      <button className="contaner " onClick={handleShow}>
        <div className="popProductImg">
          <img
            src={productImageUrl}
            className="Product-Image rounded"
            alt="logo"
          />
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
          />
        </div>
        <div>
          <a onClick={handleShow}>
            <img src={cardImage} className="cardImage" alt="logo" />
          </a>
        </div>
      </button>
    </div>
  );
}
export default PopFuncDetail;
