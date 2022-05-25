import React, { useEffect, useState } from "react";
import "../backtotop/Backtotop.css";

export default function Backtotop() {
  const [display, setDisplay] = useState("");
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY <= 300) {
  //       setDisplay("none");
  //     } else {
  //       setDisplay("block");
  //     }
  //   };
  // }, []);
  // const handleScroll = () => {
  //   if(window.scrollY > 400){
  //     setDisplay('block')
  //   }else{
  //     setDisplay('none')
  //   }
  // }
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY < 500) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  return (
    <div
      className="back"
      style={{ display: display }}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
