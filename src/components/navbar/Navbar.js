import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css";

export default function Navbar({ brand, handleMenu }) {
  const [background, setBackground] = useState("");
  const [position, setPosition] = useState("");
  const [width, setWidth] = useState("");
  const [style, setStyle] = useState("");
  const [showMenu, setShowMenu] = useState("");
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY <= 300) {
  //       setStyle("nav");
  //     } else {
  //       setStyle("navA");
  //     }
  //   };
  // }, []);
  // const handleScroll = (e) => {
  //   console.log(e.target);
  // };
  // const handleMenu = () => {
  //   console.log("first");
  // };
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY < 80) {
      setStyle("nav");
    } else {
      setStyle("navA");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style}>
      <div className="left">
        <h2 className="logo">{brand}</h2>
      </div>
      <div className="center-mob">
        <i className="fa-solid fa-bars" onClick={handleMenu}></i>
      </div>
      <div className="center">
        <ul>
          <li className="menulist">
            <a href="#">Home</a>
          </li>
          <li className="menulist">
            <a href="#">About</a>
          </li>
          <li className="menulist">
            <a href="#">Shop</a>
          </li>
          <li className="menulist">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="icons">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
}
