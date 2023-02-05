import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PopFunc from "./PopFunc";
import ProductSlide from "./ProductSlide";
import AliceCarousel from "react-alice-carousel";
import carouselData from "../data/carousel";
import slideProduct from "../data/slideProduct";
import slideProduct1 from "../data/slideProduct1";
import ProductSlide1 from "./ProductSlide1";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import products from "../data/PopProducts";

export default function Home({
  wishList,
  setWishList,
  cartItems,
  setCartItems,
}) {
  const URL = "http://localhost:8080/products";
  const [show, setShow] = useState(false);

  // const [wishListProduct, setWishListProduct] = useState([]);
  // const [productList, setProductList] = useState(products); // data from folder
  const [heart, setHeart] = useState(false);

  const responsiveSlide1 = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1440: { items: 3 },
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
  };

  const [productList, setProductList] = useState([]); // data from server

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setProductList(FETCHED_JSON.data);
  }

  function handleModal(productId, isShow) {
    console.log(productId);

    const newProductList = productList.map((product) => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          show: isShow,
        });
      } else {
        return product;
      }
    });

    setProductList(newProductList);
  }

  const images = carouselData.map((data) => {
    return (
      <div className="caroContainer flex-md-row flex-column-reverse py-5">
        <div>
          <h2>{data.title}</h2>
          <button className="btn btn-warning rounded-4 px-4 py-3 text-white">
            Shop Now
          </button>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-3 ms-3">
            Shop Now
          </button>
        </div>
        <img src={data.url} className="sliderimg" />
      </div>
    );
  });

  // populate data between 2 ranges (array)
  function populateProduct(min, max) {
    const productsList = productList.map((product, index) => {
      if (index >= min && index <= max) {
        return (
          <PopFunc
            id={product.id}
            url={product.productImageUrl}
            productImageUrl={product.productImageUrl}
            title={product.title}
            price={product.price}
            votes={product.votes}
            cardImage={product.cardImage}
            // showElem={showElement}
            handleModal={handleModal}
            show={product.show}
            setShow={setShow}
            wishList={wishList}
            setWishList={setWishList}
            cartItems={cartItems}
            setCartItems={setCartItems}
            heart={setHeart}
            setHeart={setHeart}
          />
        );
      }
    });

    return productsList;
  }

  const sliderProduct1 = slideProduct1.map((product) => {
    return (
      <ProductSlide1
        url={product.url}
        title={product.title}
        items={product.items}
      />
    );
  });

  const sliderProduct = slideProduct.map((product) => {
    const topProducts = product.products.map((p) => {
      return <ProductSlide url={p.url} title={p.title} items={p.items} />;
    });

    return <div className="d-flex">{topProducts}</div>;
  });

  return (
    <div>
      {/* <button className='btn btn-primary'>Test</button>
        <Button variant="danger">Test</Button> */}

      <div className="d-flex justify-content-between align-items-center px-5">
        <div>
          <h2>Popular Products</h2>
        </div>
        <div>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-2 ms-3">
            Cameras
          </button>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-2 ms-3">
            Laptops
          </button>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-2 ms-3">
            Tablets
          </button>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-2 ms-3">
            Mouse
          </button>
        </div>
      </div>
      <AliceCarousel
        autoPlay
        autoPlayInterval="5000"
        disableButtonsControls="true"
        infinite
      >
        <div className="popProductContainer"> {populateProduct(0, 7)}</div>
        <div className="popProductContainer">{populateProduct(8, 15)}</div>
      </AliceCarousel>

      <div className="container-banner">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval="3000"
          disableButtonsControls="true"
          mouseTracking
        >
          {images}
        </AliceCarousel>
      </div>

      <div className="ProductSliderContainer container">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          responsive={responsiveSlide1}
          infinite
        >
          {sliderProduct1}
        </AliceCarousel>
      </div>

      {/* 
        <div className="ProductSliderContainer container">
          <AliceCarousel
            autoPlay
            autoPlayInterval="3000"
            // disableButtonsControls="true"
          >
            {sliderProduct}
          </AliceCarousel>
        </div> */}

      <div className="container banner d-flex justify-content-end">
        <div className="banner-title col-6">
          <button className="btn btn-warning text-white rounded-4  px-4 py-2 ms-3">
            New Laptops
          </button>
          <h2>Sale up to 50% off</h2>
          <p>12 inch hd display</p>
          <button className="btn btn-warning text-white rounded-4  px-4 py-2 ms-3">
            Shop Now
          </button>
        </div>
      </div>

      <div className="container justify-content-center d-flex flex-wrap">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableButtonsControls="true"
          responsive={responsive}
          mouseTracking
          infinite
        >
          {populateProduct(0, 15)}
        </AliceCarousel>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
