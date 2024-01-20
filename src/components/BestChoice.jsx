import React from "react";

function BestChoice() {
  return (
    <div className="bg-dark flex justify-between items-center mt-4 p-4 rounded">
      <div className="text-white m-auto">
        <div className="text-6xl">Best Seller</div>
        <div className="text-center text-red">Get best deal</div>
      </div>
      <div className="rounded w-1/2 h-[250px] object-contain bg-no-repeat bg-[url('https://cdn.dummyjson.com/product-images/1/thumbnail.jpg')]"></div>
    </div>
  );
}

export default BestChoice;
