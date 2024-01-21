import React from "react";

function TopRestoCard({ data }) {
  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.cloudinaryImageId})`,
      }}
      className="relative rounded-lg bg-no-repeat bg-cover bg-center cursor-pointer"
    >
      <div className="rounded-lg absolute bottom-0 left-0 w-[100%] h-2/3 bg-gradient-to-t from-dark"></div>
      <div className="absolute bottom-0 left-[50%] text-white text-nowrap translate-x-[-50%] mb-2">
        <div className="font-bold text-xl">
          {data?.aggregatedDiscountInfoV3?.header}{" "}
          {data?.aggregatedDiscountInfoV3?.subHeader}
        </div>
        <div className="text-[11px] text-center">
          {data?.name} -{" "}
          <span className="text-red">{data?.sla?.lastMileTravelString}</span>
        </div>
      </div>
    </div>
  );
}

export default TopRestoCard;
