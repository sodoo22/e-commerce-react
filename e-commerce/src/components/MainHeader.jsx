


export default function MainHeader() {



    return (
        <div className='MainHeader'>
            <div><img src="../images/logo1.png" alt="" /></div>
            <div className="col-5">
                <div class="input-group my-1">
                    <input type="text" class="form-control rounded-4 p-3" placeholder="Search any things" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-warning rounded-4 px-5 text-white" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className="User-Info">
                <div><i class="bi bi-person"></i> Sign in</div>
                <div><i class="bi bi-heart"></i><span className="User-Info-R">0</span></div>
                <div><i class="bi bi-cart-check"></i><span className="User-Info-R">0</span></div>
            </div>


        </div>
    )
}
