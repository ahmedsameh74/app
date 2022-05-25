import React from "react";
import "../header/Header.css";
import IMG from "../..//img/shutterstock_720115000-min.jpg";
import IMGTWO from "../..//img/shutterstock_266558153.jpg";

export default function Header() {
  return (
    <div className="Header">
      <div className="content">
        <h3>Hello! What would you like to buy?</h3>
        <p className="main">
          Search between millions of products from hundreds different online
          shop. Our price comparison service helps you find the best deal on the
          market.
        </p>
        <button className="main-btn">Shop now!</button>
        <div className="contentimg">
          <div className="img">
            <div className="overlay"></div>
            <h4>Summer collection</h4>
            <p className="headpar">Check our summer collection!</p>
            <button>shop now</button>
            {/* <img src={IMG} alt="" /> */}
          </div>
          <div className="imgtwo">
            {/* <img src={IMG} alt="image" className="img" /> */}
            <h4>Summer collection</h4>
            <p className="headpar">Check our summer collection!</p>
            <button>shop now</button>
          </div>
          <div className="imgthree">
            {/* <img src={IMG} alt="image" className="img" /> */}
            <h4>Summer collection</h4>
            <p className="headpar">Check our summer collection!</p>
            <button>shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
