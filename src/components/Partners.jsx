import { PartnersData } from "./Data";

const Partners = () => {
  return (
    <div className="container grid place-items-center gap-4 md:gap-12 pb-16 xl:pb-[100px]">
      <h3 className="text-3xl">
        <span className="p-text">Partners</span> & Investors
      </h3>
      <div className="flex items-center gap-10">
        {PartnersData.map((data) => (
          <img
            key={data.id}
            className="w-[50px] md:w-[80px]"
            src={data.img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
