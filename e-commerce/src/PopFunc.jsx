function PopFunc({ productImageUrl, price, title, cardImage, }) {
    return (
        <div className="contaner">
            <div className="popProductImg">
                <img src={productImageUrl} className="Product-Image rounded" alt="logo" />
            </div>
            <div className="textbox">
                <p className="bluetext">{title}</p>
                <p className="price">${price}</p>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
            <div>
                <img src={cardImage} className="cardImage" alt="logo" />
            </div>
        </div>
    )
}
export default PopFunc





