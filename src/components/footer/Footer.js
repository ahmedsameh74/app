import React from "react";
import "../footer/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <h5>Contact</h5>
        <p className="footpara">Fakous, Sharqya, Egypt</p>
        <p className="footpara">info@info.com</p>
        <p className="footpara">+201094743313</p>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div className="links">
        <h5>Links</h5>
        <p className="footpara">About Us</p>
        <p className="footpara">FAQ</p>
        <p className="footpara">Location</p>
        <p className="footpara">Affiliates</p>
        <p className="footpara">Contact</p>
      </div>
      <div className="my-account">
        <h5>My Account</h5>
        <p className="footpara">My Account</p>
        <p className="footpara">Discount</p>
        <p className="footpara">Returns</p>
        <p className="footpara">Order History</p>
        <p className="footpara">Order Tracking</p>
      </div>
      <div className="newsletter">
        <h5>Newsletter</h5>
        <div className="input">
          <input type="email" placeholder="Your email address" />
          <i className="fa-solid fa-right-long"></i>
        </div>
        <div className="list">
          <span>Term & Condition</span>
          <span>Policy</span>
          <span>Map</span>
        </div>
      </div>
    </div>
  );
}
