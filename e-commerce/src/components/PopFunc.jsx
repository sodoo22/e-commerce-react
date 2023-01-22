import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function PopFunc({
  id,
  url,
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
  // heart,
  // setHeart,
}) {
  const notify = () =>
    toast("Сагсанд амжилттай нэмэгдлээ!", {
      icon: "🚀",
    });
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
  const [heart, setHeart] = useState(false);
  const [cartAdIcon, setCartAdIcon] = useState(false)

  function handleWish(proId) {
    console.log("Pruduct ID = ", proId);

    let wishListQty = wishList.length;
    let isAdded = false;

    if (wishListQty > 0) {
      wishList.map(el => {
        if (el.id == proId) {
          isAdded = true;
        }
      });
      if (isAdded) {
        setWishList(wishList.filter(el => el.id !== proId));
      }
    }
    if (isAdded == false) {
      setWishList([...wishList, { id: id, name: title, url: url }]);
    }
  }
  console.log("Wish list Pcs = " + productsPcs);

  function inWishList(id) {
    let result = false;
    wishList.map(el => {
      if (el.id == id) {
        result = true;
      }
    })
    return result;
  }

  function handleCartItems(proId) {
    notify();
    setCartAdIcon(true)
    console.log("Pruduct ID = ", proId);
    setCartItems([...cartItems, { id: id, name: title, url: url, price: price }]);
  }
  // console.log("Cart Items Pcs = " + cartItemsQty);

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
          {inWishList(id) ? (
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
          <Link
            // cartItems={cartItems}
            // setCartItems={setCartItems}
            // id={id}
            to={`/detail/${id}`}
            state={{ cartItems: cartItems, id: id, title: title, price: price, url: productImageUrl, votes: votes, }}
          >
            <p className="bluetext">{title}</p>
          </Link>

          <p className="price">${price}</p>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            initialValue={votes}
          />
        </div>
        <div className="text-end">
          <a
            onClick={() => {
              handleCartItems(id);
            }}
          >
            {/* <img src={cardImage} className="cardImage" alt="logo" /> */}
            {cartAdIcon ? (
              <i class="bi bi-cart-fill"></i>
            ) : (
              <i class="bi bi-cart"></i>
            )}
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
