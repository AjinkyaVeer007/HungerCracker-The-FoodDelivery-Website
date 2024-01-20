import React from "react";
import CustomButton from "./CustomButton";

function ProductCard({ data }) {
  return (
    <div className="shadow-sm">
      <img
        className="rounded w-3/4 h-[180px] object-contain"
        src={data?.thumbnail}
        alt="img"
      />
      <div className="text-primary text-base mt-2">{data?.title}</div>
      <p className="text-secondary text-sm truncate mb-4">
        {data?.description}
      </p>
      <div className="flex justify-between items-centre">
        <div className="text-primary font-bold">${data?.price}</div>
        <CustomButton />
      </div>
    </div>
  );
}

export default ProductCard;
