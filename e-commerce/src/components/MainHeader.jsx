


export default function MainHeader() {



    return (
        <div className='MainHeader'>

            <div><img src="../images/logo1.png" alt="" /></div>
            <div>
                <div class="input-group my-1">
                    <input type="text" class="form-control" placeholder="Search any things" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-warning" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className="User-Info">
                <div><i class="bi bi-person"></i> Sign in</div>
                <div><i class="bi bi-heart"></i> 0</div>
                <div><i class="bi bi-cart-check"></i> 0</div>
            </div>


        </div>
    )
}
