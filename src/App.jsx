import { useState } from "react";
import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="p-6 shadow-md flex justify-between items-center">
      {/* logo */}
      <img
        src="./images/airbnb-logo.png"
        alt=""
        className="hidden w-28 lg:w-32 md:flex"
      />
      <img src="./images/logo.png" alt="" className="w-10 md:hidden" />

      <nav>
        <a href="#" className="m-2 cursor-pointer font-semibold md:m-6">
          Become a Host
        </a>
        <a href="#" className="m-2 cursor-pointer font-semibold md:m-6">
          Sign up
        </a>
        <a href="#" className="m-2 cursor-pointer font-semibold md:m-6">
          Log in
        </a>
      </nav>
    </div>
  );
}

function Mainsection() {
  return (
    <section>
      <div className="mx-auto p-8 space-y-10">
        <img
          src="./images/photo-grid.png"
          alt=""
          className="md:max-w-3xl lg:max-w-4xl mx-auto"
        />
        <h1 className="font-semibold text-5xl mt-16 font-Poppins ">
          Online Experience
        </h1>
        <p className="font-extralight text-2xl md:max-w-lg">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

function Experience(props) {
  return (
    <section className="flex mx-auto">
      <div className="flex justify-center mx-10 p-2 relative">
        {!props.openSpots == 0 && (
          <div className="absolute top-6 left-5 bg-white text-red-600 p-2 rounded-md font-bold">
            SOLD OUT
          </div>
        )}
        <div>
          <img
            src={props.img}
            alt=""
            className="h-80 md: max-h-96 rounded-3xl"
          />

          <div className="flex items-center justify-center">
            <img src="./images/star.png" className="h-2" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
          </div>

          <div className="flex  justify-center items-center">
            <p className="font-semibold w-48 mt-2  text-center">
              {props.heading}
            </p>
          </div>

          <p className="flex justify-center">
            <span className="bold">From ₹{props.price}</span> / person
          </p>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
export { Mainsection, Experience };
