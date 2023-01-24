export default function Cart(props) {


    function remomeFromCart(id) {
        console.log("Cart Removed ID = " + id);
        props.setCartItems(props.cartItems.filter((el) => el.id !== id));
    }


    function findQty(cartId) {
        let sum = props.cartItems.filter(el => el.id === cartId).length
        return sum;
    }

    function handleCartItems(proId) {
        // notify();
        // props.setCartAdIcon(true);
        console.log("Pruduct ID = ", proId);
        // const filteredItem = cartItems.filter((c) => c.id === proId);

        props.setCartItems([
            ...props.cartItems,
            { id: props.id, name: props.title, url: props.url, price: props.price, qty: 1 },
        ]);
    }


    let result = []
    function reArr(arr) {

        arr.forEach(function (a) {
            if (!this[a.id]) {
                this[a.id] = { id: a.id, name: a.name, url: a.url, price: a.price, qty: 0 };
                result.push(this[a.id]);
            }
            this[a.id].qty += a.qty;
        }, Object.create(null));
        // return result;
    }

    console.log(reArr(props.cartItems));



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

                            return (
                                <div key={index} className="cartadd-product">
                                    <img src={cartItem.url} alt="" />
                                    {cartItem.name}
                                    {/* ID:{cartItems.id} */}
                                    $ {cartItem.price}
                                    <div className="deQty">
                                        <a > - </a>
                                        <span className="qty">{cartItem.qty}</span>
                                        <a
                                            onClick={() => {
                                                handleCartItems(props.id);
                                                // console.log(proData.id);


                                            }}
                                        > + </a>

                                    </div>
                                    $ {cartItem.price * cartItem.qty}
                                    <a onClick={() =>
                                        remomeFromCart(cartItem.id)
                                    }>
                                        <i class="bi bi-x-circle text-black"></i>
                                    </a>
                                </div>
                            )
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
                            <p>$ 100</p>
                        </div>
                        <hr />
                        <div><input type="email" placeholder="Enter coupon code" /></div>
                        <hr />
                        <select name="" id="">
                            <option value="">Country</option>
                            <option value="">Country</option>
                        </select>
                        <div className="d-flex justify-content-between py-4">
                            <p>Total amount</p>
                            <p>$ 100</p>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-warning rounded-5 px-4 py-3 text-white">Proceed to ckeckout</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}