import React from "react";
import "../App.css";
import Tree from "../img/tree.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bgimage">
      <div className="h-[100px] md:hidden"></div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 place-items-center min-h-screen">
          <div>
            <h1
              className="text-6xl mb-10
            "
            >
              Lorem ipsum dolor sit amet{" "}
              <span className="p-text">consectetur</span> adipisicing.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae id molestias quasi, temporibus aperiam perferendis quae
              deserunt quia tempore consectetur!
            </p>
          </div>
          <div>
            <img src={Tree} className="xl:scale-125" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
