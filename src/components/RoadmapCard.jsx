import React from "react";

const RoadmapCard = ({ borderLeft, borderRight, num }) => {
  return (
    <div className="flex flex-col items-center relative">
      {borderRight && (
        <div className="w-1/2  xl:bg-gray-300 h-[2px] absolute -right-2 mt-[15px] z-0"></div>
      )}
      {borderLeft && (
        <div className="w-1/2 xl:bg-gray-300 h-[2px] absolute -left-2 mt-[15px] z-0"></div>
      )}
      <div className="w-[30px] relative z-10 ring-8 ring-green-500/30 h-[30px] mx-auto rounded-full bg-green-600 font-bold hover:scale-110 duration-200 text-sm text-white grid place-items-center">
        {num}
      </div>
      <div className="h-[50px] w-[2px] mt-2 bg-gray-300"></div>
      <div className="max-w-[250px] text-center bg-gray-400/20 p-4 rounded-xl">
        <h3 className="text-2xl mb-3">Lorem, ipsum.</h3>
        <p className="mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cum
          atqueommodi eveniet aperiam!
        </p>
      </div>
    </div>
  );
};

export default RoadmapCard;
