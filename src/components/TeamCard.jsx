import React from "react";
import BG from "../img/BG.svg";

const TeamCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className="max-w-[300px] bg-no-repeat bg-contain p-4"
    >
      <img
        src={img}
        alt=""
        className="w-[150px] rounded-full mx-auto xl:-mt-10 rounded-xl mb-4"
      />
      <h3 className="mb-2">{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default TeamCard;
