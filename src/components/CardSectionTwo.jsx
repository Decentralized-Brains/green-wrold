import Card2 from "./Card2";
import { Card2Data } from "./Data";

const CardSectionTwo = () => {
  return (
    <div className="container text-center mb-[150px]">
      <h3 className="text-3xl">
        Ipsum <span className="p-text">Partners</span> dolor sit amet.
      </h3>
      <div>
        <div className="grid md:grid-cols-3 pt-20 gap-6 px-4">
          {Card2Data.map((data) => (
            <Card2 data={data} key={data.id} />
          ))}
        </div>
      </div>
      <button className="mx-auto mt-10">Read More</button>
    </div>
  );
};

export default CardSectionTwo;
