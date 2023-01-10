export default function ProductSlide1({ url, items, title }) {
    return (
        <div className="contaner-product-slide  rounded-4">
            <div className="popProductImg">
                <img src={url} className="Product-Image" alt="logo" />
            </div>
            <div className="textbox">
                <p className="bluetext">{title}</p>
                <p className="price">( {items} items)</p>
            </div>
        </div>
    )
}






