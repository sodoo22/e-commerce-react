import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import CostumerRev from "./CostumerRev";

export default function DetailPage() {
  const location = useLocation();
  const proData = location.state;
  console.log(proData);


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
      <p className="ms-5 my-4">Home - All Category - </p>
      <div className="d-flex">
        <div className="deCol-L"><img src={`../${proData.url}`} alt="" /></div>
        <div className="deCol-R">
          <span className="deName">{proData.title}</span>
          <p className="dePrice">${proData.price}</p>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            initialValue={proData.votes}
          />
          <br />
          <div className="py-3">
            <span className="deText ">Availabillity : </span>
            <span className="deIsStock"><i class="bi bi-check2"></i>  in Stock</span>
          </div>
          <p>Hurry up! only 34 product left in stock!</p><hr />
          <div className="d-flex gap-2 align-items-center">
            <span className="deText">Color : </span>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="color" tabindex="0" class="hidden" />
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="color" tabindex="0" class="hidden" />
              </div>
            </div>
          </div>
          <div className="py-3">
            <span className="deText">Size : </span>
          </div>
          <div>
            <span className="deText">Quantity : </span>
          </div>
          <div className="d-flex gap-4 pt-4">
            <button className="btn btn-warning rounded-5 px-5 py-3 text-white">Add to Cart</button>
            <button className="btn btn-warning rounded-5 px-5 py-3 text-white">Buy it Cart</button>
            <button className="btn btn-light rounded-5 p-3 text-white"><i class="bi bi-heart"></i></button>
          </div><hr />
          <div>
            <span className="deText">SKU : 01133-9-9</span>
          </div>
          <div className="py-3 d-flex align-items-center gap-4">
            <span className="deText">Category :  </span>
            <span> 20% off</span>
            <span> 49% off</span>
            <span> Alex remote</span>
          </div>
          <div className="d-flex  gap-4">
            <span className="deText">Share : </span>
            <i class="bi bi-google"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
          </div>
        </div>
      </div>

      <CostumerRev />
    </div>
  );
}
