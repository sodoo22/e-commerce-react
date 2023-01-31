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
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";

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
        // id={id}
        // heart={heart}
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
        <Route
          path="/detail/:id"
          element={<DetailPage wishList={wishList} setWishList={setWishList} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
