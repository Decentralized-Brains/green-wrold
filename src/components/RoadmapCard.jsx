import React from "react";

const RoadmapCard = ({ reverse }) => {
  return (
    <div className="flex">
      {reverse ? (
        <div className="max-w-[250px] text-center bg-gray-500/20 p-4 rounded-xl">
          <h3 className="text-2xl mb-3">Lorem, ipsum.</h3>
          <p className="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cum atqueommodi eveniet aperiam!
          </p>
          <div className="w-[80px] h-[80px] mx-auto rounded-full bg-black font-bold text-xl text-white grid place-items-center">
            2019
          </div>
        </div>
      ) : (
        <div className="max-w-[250px] text-center xl:mt-20 bg-green-500/20 p-4 rounded-xl">
          <div className="w-[80px] h-[80px] mx-auto rounded-full bg-green-600 font-bold text-xl text-white grid place-items-center mb-3">
            2019
          </div>
          <h3 className="text-2xl mb-3">Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cum atqueommodi eveniet aperiam!
          </p>
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;
