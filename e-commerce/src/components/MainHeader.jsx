import { Link } from "react-router-dom";

export default function MainHeader(props) {
  function wishListDiv() {
    console.log("wishlist clicked");
    let wishDiv = document.getElementById("wishListToggler");
    if (wishDiv.style.display != "block") {
      wishDiv.style = "display:block";
    } else {
      wishDiv.style = "display:none";
    }
  }
  console.log(props.wishList);

  function CartItemsDiv() {
    console.log("wishlist clicked");
    let cartItemsDiv = document.getElementById("CartItemsToggler");
    if (cartItemsDiv.style.display != "block") {
      cartItemsDiv.style = "display:block";
    } else {
      cartItemsDiv.style = "display:none";
    }
  }

  function remomeFromCart(id) {
    console.log("Cart Removed ID = " + id);
    props.setCartItems(props.cartItems.filter((el) => el.id !== id));
  }

  function removeWishList(id) {
    console.log("Cart Removed ID = " + id);
    props.setWishList(props.wishList.filter((el) => el.id !== id));

  }
  return (
    <div className="MainHeader">
      <div>
        <Link to={'/'}>  <img src="../images/logo1.png" alt="" /></Link>
      </div>
      <div className="col-5">
        <div class="input-group my-1">
          <input
            type="text"
            class="form-control rounded-4 p-3"
            placeholder="Search any things"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-warning rounded-4 px-5 text-white"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="User-Info">
        <div>
          <i class="bi bi-person"></i>
        </div>
        <Link to={'/signup'}>Sign Up</Link>
        <div onClick={wishListDiv} className="d-flex">
          <i class="bi bi-heart"></i>
          <div className="User-Info-R">{props.wishList.length}</div>
        </div>
        <div className="wishDivCon" id="wishListToggler">
          <p>Wish list</p>
          <div>
            {props.wishList.map((myWishList, index) => (
              <div key={index} className="wishlist-product">
                <div><img src={myWishList.url} alt="" /></div>

                {/* {myWishList.id} */}
                {myWishList.name}
                <a onClick={() => removeWishList(myWishList.id)}>
                  <i class="bi bi-x-circle text-danger ms-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div onClick={CartItemsDiv} className="d-flex">
          <i class="bi bi-cart-check"></i>
          <div className="User-Info-R">{props.cartItems.length}</div>
        </div>
        <div className="cartItemsDivCon" id="CartItemsToggler">
          <p>Cart Items</p>
          <div>
            {props.cartItems.map((cartItems, index) => (
              <div key={index} className="cartadd-product">
                <img src={cartItems.url} alt="" />
                {/* ID:{cartItems.id} */}
                {cartItems.name}
                <a onClick={() => remomeFromCart(cartItems.id)}>
                  <i class="bi bi-x-circle text-danger"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to={'/cart'}>Cart</Link>
        </div>
      </div>
    </div>
  );
}
