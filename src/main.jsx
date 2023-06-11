import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar, { Mainsection, Experience } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Mainsection />

    <div className="flex overflow-x-auto ">
      <Experience
        img="./images/taj2.jpg"
        heading="Taj Mahal Same Day Tour from Delhi"
        rating="4.8"
        reviewCount="109"
        location="Agra"
        price="3200"
        openSpots="0"
      />

      <Experience
        img="./images/hm.jpg"
        heading="Hidden Gems of Pink City & Jaipur Hand Block Painting"
        rating="4.9"
        reviewCount="150"
        location="Jaipur"
        price="4000"
      />
      <Experience
        img="./images/Old-d.webp"
        heading="Old Delhi's Food, Temples & Spice Market"
        rating="4.9"
        reviewCount="59"
        location="Delhi"
        price="3000"
        openSpots="0"
      />
      <Experience
        img="./images/Old-d-his.webp"
        heading="Old Delhi Food & History, A fusion of Taste & Culture"
        rating="5.0"
        reviewCount="29"
        location="Delhi"
        price="2500"
      />
    </div>
  </React.StrictMode>
);
