import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PopFuncDetail from "./PopFuncDetail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopFunc({
  id,
  productImageUrl,
  price,
  title,
  cardImage,
  votes,
  setShow,
  show,
  handleModal,
  setWishList,
  wishList,
  setCartItems,
  cartItems,
  heart,
  setHeart,
}) {
  const notify = () => toast("Амжилттай хадгалагдлаа.!");
  // function handleUpVote(proId) {
  //   // console.log("Clicked");
  //   console.log(proId);
  //   // showElem(proId);
  //   // console.log(proId);
  // }
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
  let cartItemsQty = cartItems.length;
  // const [heart, setHeart] = useState(false);
  function handleWish(proId) {
    setHeart(!heart);
    console.log("Pruduct ID = ", proId);

    if (!heart) {
      console.log("TEST");
      setWishList([...wishList, { id: id, name: title }]);
      // return wishList;
    }
    if (heart) {
      console.log("ustah");
      setWishList(wishList.filter((e) => e.id !== proId));
    }
  }

  console.log("Wish list Pcs = " + productsPcs);

  function handleCartItems(proId) {
    notify();

    console.log("Pruduct ID = ", proId);
    setCartItems([...cartItems, { id: id, name: title }]);
  }
  console.log("Cart Items Pcs = " + cartItemsQty);

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
          {heart ? (
            <i class="bi bi-heart-fill"></i>
          ) : (
            <i class="bi bi-heart"></i>
          )}
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
          <a
            // onClick={handleCartItems}
            onClick={() => {
              handleCartItems(id);
            }}
          >
            <img src={cardImage} className="cardImage" alt="logo" />
          </a>
          <ToastContainer position="top-center" />
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
