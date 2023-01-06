export default function ProductSlide({ productImageUrl, price, title, cardImage, }) {
    return (
        <div className="contaner-product-slide">
            <div className="popProductImg">
                <img src={productImageUrl} className="Product-Image rounded" alt="logo" />
            </div>
            <div className="textbox">
                <p className="bluetext">{title}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    )
}






