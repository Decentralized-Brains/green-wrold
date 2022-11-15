import React from "react";
import RoadmapCard from "./RoadmapCard";

const Roadmap = () => {
  return (
    <div className="container pb-[150px] text-center">
      <h3 className="text-3xl">
        <span className="p-text">Road</span> Map
      </h3>
      <br />
      <br />
      {/* <div className="w-full h-[2px] bg-gray-200 absolute mt-4">h2</div> */}
      <div className="grid place-items-center gap-4 md:grid-cols-3 xl:grid-cols-6">
        <RoadmapCard num={1} borderRight />
        <RoadmapCard num={2} borderLeft borderRight />
        <RoadmapCard num={3} borderLeft borderRight />
        <RoadmapCard num={4} borderLeft borderRight />
        <RoadmapCard num={5} borderLeft borderRight />
        <RoadmapCard num={6} borderLeft />
      </div>
    </div>
  );
};

export default Roadmap;
