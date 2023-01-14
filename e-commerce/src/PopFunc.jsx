import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PopFuncDetail from "./PopFuncDetail";

function PopFunc({
  id,
  productImageUrl,
  price,
  title,
  cardImage,
  votes,
  setShow,
  show,
  // showElem,
  // closeElem,
  handleModal,
  setWishList,
  wishList,
}) {
  function handleUpVote(proId) {
    // console.log("Clicked");
    console.log(proId);
    // showElem(proId);
    // console.log(proId);
  }
  //   console.log(id);
  const handleClose = (id) => {
    // console.log("closing");
    // console.log(id);
    // setShow(false);
    handleModal(id, false);
    // closeElem(id);
  };
  const handleShow = () => {
    // showElem(id);
    // setShow(show);
    handleModal(id, true);
  };


  let productsPcs = wishList.length;

  function handleWish(proId) {
    console.log("Pruduct ID = ", proId);
    // setWishList([...wishList, { id: id, name: title }]);
    // setWishList(wishList + 1);
    // console.log(wishList[0].id);

    if (wishList.length == 0) {
      console.log('TEST');
      // return wishList;
      setWishList([...wishList, { id: id, name: title }]);
    }
    wishList.map(el => {
      console.log(el);
      if (el.id === proId) {
        console.log(wishList);
        console.log('Ene baraa bn');
        wishList.splice(0, 1);
        console.log(wishList);
      }

    })
    // return wishList;
  }
  console.log("Wish list Pcs = " + productsPcs)




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
      <button className="contaner ">
        <a
          className="d-flex justify-content-end"
          onClick={() => {
            handleWish(id);
          }}
        >
          <i class="bi bi-heart"></i>
        </a>
        <div className="popProductImg" onClick={handleShow}>
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

      <Modal
        show={show}
        onClick={() => {
          handleClose(id);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <PopFuncDetail />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add to Card
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default PopFunc;
