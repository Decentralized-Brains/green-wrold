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

      <div className="grid place-items-center gap-4 md:grid-cols-3 xl:grid-cols-6">
        <RoadmapCard />
        <RoadmapCard reverse />
        <RoadmapCard />
        <RoadmapCard reverse />
        <RoadmapCard />
        <RoadmapCard reverse />
      </div>
    </div>
  );
};

export default Roadmap;
