import React, { useEffect, useState } from "react";
import "../menu/Menu.css";

export default function Menu({ menu }) {
  const [className, setClassName] = useState("Menu");
  useEffect(() => {
    // console.log(menu);
    menu ? setClassName("MenuA") : setClassName("Menu");
  }, [menu]);
  return (
    <div className="menu">
      <ul className={className}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}
