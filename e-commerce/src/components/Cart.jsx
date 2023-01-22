export default function Cart(props) {


    function remomeFromCart(id) {
        console.log("Cart Removed ID = " + id);
        props.setCartItems(props.cartItems.filter((el) => el.id !== id));
    }

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
                        {props.cartItems.map((cartItems, index) => (
                            <div key={index} className="cartadd-product">
                                <img src={cartItems.url} alt="" />
                                {cartItems.name} ` `
                                {/* ID:{cartItems.id} */}
                                $ {cartItems.price}
                                <div className="deQty">
                                    <a > - </a>
                                    <span className="qty">0</span>
                                    <a
                                        onClick={() => {
                                            // handleCartItems(proData.id);
                                            // console.log(proData.id);

                                        }}
                                    > + </a>

                                </div>
                                <a onClick={() =>
                                    remomeFromCart(cartItems.id)
                                }>
                                    <i class="bi bi-x-circle text-black"></i>
                                </a>
                            </div>
                        ))}
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