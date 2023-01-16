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

  function remomeFromCart(id, props) {
    console.log("Cart Removed ID = " + id);
    props.setCartItems(props.cartItems.filter((el) => el.id !== id))
  }
  return (
    <div className="MainHeader">
      <div>
        <img src="../images/logo1.png" alt="" />
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
          <i class="bi bi-person"></i> Sign in
        </div>
        <div onClick={wishListDiv} className="d-flex">
          <i class="bi bi-heart"></i>
          <div className="User-Info-R">{props.wishList.length}</div>
        </div>
        <div className="wishDivCon" id="wishListToggler">
          Wish list
          <ul>
            {props.wishList.map((myWishList, index) => (
              <li key={index}>
                ID:{myWishList.id}
                {myWishList.name}
                <a>
                  <i class="bi bi-x-circle-fill text-danger ms-2"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={CartItemsDiv} className="d-flex">
          <i class="bi bi-cart-check"></i>
          <div className="User-Info-R">{props.cartItems.length}</div>
        </div>
        <div className="cartItemsDivCon" id="CartItemsToggler">
          Cart Items
          <ul>
            {props.cartItems.map((cartItems, index) => (
              <li key={index}>
                ID:{cartItems.id}
                {cartItems.name}
                <a onClick={() => remomeFromCart(cartItems.id, props)}>
                  <i class="bi bi-x-circle-fill text-danger ms-2"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
