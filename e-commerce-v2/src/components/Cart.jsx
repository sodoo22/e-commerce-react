export default function Cart(props) {
  console.log(props);
  function remomeFromCart(id) {
    console.log("Cart Removed ID = " + id);
    props.setCartItems(props.cartItems.filter((el) => el.id !== id));
  }

  function findQty(cartId) {
    let sum = props.cartItems.filter((el) => el.id === cartId).length;
    return sum;
  }

  function handleCartItems(proId) {
    // notify();
    // props.setCartAdIcon(true);
    console.log("Pruduct ID = ", proId);
    const filteredItem = props.cartItems.filter((c) => c.id === proId);
    console.log(filteredItem);

    props.setCartItems([
      ...props.cartItems,
      {
        id: filteredItem[0].id,
        name: filteredItem[0].name,
        url: filteredItem[0].url,
        price: filteredItem[0].price,
        qty: 1,
      },
    ]);
  }

  function remomeFromCart(proId) {
    console.log("Cart Removed ID = " + proId);
    const filteredItem = props.cartItems.filter((c) => c.id === proId);
    const filteredItem11 = props.cartItems.filter((c) => c.id !== proId);
    // props.setCartItems(props.cartItems.filter((el) => el.id !== proId));
    filteredItem.shift()
    console.log(filteredItem);
    props.setCartItems(filteredItem.concat(filteredItem11))
  }

  function remomeFromCartList(proId) {
    props.setCartItems(props.cartItems.filter((el) => el.id !== proId));
  }

  let result = [];
  function reArr(arr) {
    arr.forEach(function (a) {
      if (!this[a.id]) {
        this[a.id] = {
          id: a.id,
          name: a.name,
          url: a.url,
          price: a.price,
          qty: 0,
        };
        result.push(this[a.id]);
      }
      this[a.id].qty += a.qty;
    }, Object.create(null));
    // return result;
  }

  console.log(reArr(props.cartItems));

  result = result.sort((a, b) => a.id - b.id)

  console.log('result', result);

  const total = result.reduce(
    (prevValue, currentValue) => prevValue + currentValue.qty * currentValue.price,
    0
  );

  return (
    <div className="px-5">
      <p className=" my-4">Home - Cart - </p>
      <div className="d-flex gap-3">
        <div className="col-8">
          <div className="cartDivHead d-flex justify-content-between pt-3 px-5">
            <p>Cart Items</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div>
            {result.map((cartItem, index) => {
              // console.log(reCartItems.length);
              console.log(cartItem);
              return (
                <div key={index} className="cartadd-product">
                  <div className="col-1">
                    <img src={cartItem.url} alt="" />
                  </div>
                  <div className="col-3">
                    {cartItem.name}
                  </div>
                  <div className="col-1">
                    $ {cartItem.price}
                  </div>
                  <div className="deQty">
                    <a onClick={() => remomeFromCart(cartItem.id)}> - </a>
                    <span className="qty">{cartItem.qty}</span>
                    <a
                      onClick={() => {
                        handleCartItems(cartItem.id);
                        console.log(cartItem.id);
                      }}
                    >
                      {" "}
                      +{" "}
                    </a>
                  </div>
                  <div className="col-1">
                    $ {cartItem.price * cartItem.qty}
                  </div>
                  <div className="col-1">
                    <a onClick={() => remomeFromCartList(cartItem.id)}>
                      <i class="bi bi-x-circle text-black"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between py-4">
            <button className="btn btn-warning rounded-5 px-4 py-3 text-white">
              Continue shopping
            </button>
            <button className="btn btn-outline-secondary rounded-5 px-5 py-3 ">
              Update cart
            </button>
            <button className="btn btn-outline-danger rounded-5 px-5 py-3 ">
              Clear cart
            </button>
          </div>
        </div>
        <div className="cartDiv col-4 border">
          <div className="cartDivHead d-flex justify-content-between pt-3 px-5">
            <p>Cart total</p>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>$ {total}</p>
            </div>
            <hr />
            <div>
              <input type="email" placeholder="Enter coupon code" />
            </div>
            <hr />
            <select name="" id="">
              <option value="">Country</option>
              <option value="">Country</option>
            </select>
            <div className="d-flex justify-content-between py-4">
              <p>Total amount</p>
              <p>$ {total}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-warning rounded-5 px-4 py-3 text-white">
                Proceed to ckeckout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
