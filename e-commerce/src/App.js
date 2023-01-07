import React from 'react';
import "./App.css";
import PopFunc from "./PopFunc";
import products from "./PopProducts";
import MainMenu from "./components/MainMenu";
import MainHeader from "./components/MainHeader";
// import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductSlide from "./ProductSlide";
import AliceCarousel from "react-alice-carousel";
import carouselData from "./data/carousel";
import slideProduct from "./data/slideProduct";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1440: { items: 4 },
};

function App() {
  const images = carouselData.map((data) => {
    return (

      <div className="caroContainer py-5">
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

  const productsList = products.map((product) => {
    console.log(product);
    return (
      <PopFunc
        // votes={product.votes}
        productImageUrl={product.productImageUrl}
        title={product.title}
        price={product.price}
        // description={product.description}
        cardImage={product.cardImage}
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
    <div className="App">
      <div className="Header-Info">
        <div>Need help? Call us: (+98) 0234 456 789</div>
        <div className="Header-Info-R">
          <div className="OurStore">
            <i class="bi bi-geo-alt"></i> Our store
          </div>
          <div>
            <i class="bi bi-truck"></i> Track your order
          </div>
        </div>
      </div>

      <div className="menu-container">
        <MainHeader />
        <MainMenu />
      </div>
      {/* <button className='btn btn-primary'>Test</button>
      <Button variant="danger">Test</Button> */}

      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval="3000"
        disableButtonsControls="true"
        mouseTracking
      >
        {images}

      </AliceCarousel>


      <div className="ProductSliderContainer">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
        // disableButtonsControls="true"

        >

          {sliderProduct}

        </AliceCarousel>
      </div>

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
      <div className="popProductContainer">{productsList}</div>

      <div className="container banner p-5">

        <div className="banner-title">
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
      <div className='container justify-content-center'>
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableButtonsControls="true"
          responsive={responsive}
          mouseTracking

        >
          {productsList}

        </AliceCarousel>
      </div>
    </div>
  );
}

export default App;
