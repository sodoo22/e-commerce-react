import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
import DetailPage from "./components/DetailPage";
import HeaderContact from "./components/HeaderContact";
import Footer from "./components/Footer";

function App() {
  const [wishList, setWishList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // const [heart, setHeart] = useState(false);
  return (
    <div className="App">
      <HeaderContact />
      <MainHeader
        wishList={wishList}
        setWishList={setWishList}
        cartItems={cartItems}
        setCartItems={setCartItems}
      // heart={setHeart}
      // setHeart={setHeart}
      />
      <NavMenu />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishList={wishList}
              setWishList={setWishList}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
