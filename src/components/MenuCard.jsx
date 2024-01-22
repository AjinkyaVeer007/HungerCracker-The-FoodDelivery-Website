import React from "react";

function MenuCard({ data }) {
  return (
    <div className="rounded-lg border border-border relative">
      {data?.imageId ? (
        <img
          className="rounded w-full h-[150px] aspect-video object-cover object-top"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.imageId}`}
          alt="img"
        />
      ) : (
        <img
          className="rounded w-full h-[150px] aspect-video object-cover object-top"
          src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg"
          alt="img"
        />
      )}
      <div className="p-4">
        <div className="mb-6 font-medium text-[12px] truncate">
          {data?.name}
        </div>
        <div className="flex items-center justify-between">
          <div className="font-medium text-[16px]">
            ₹{" "}
            {Number(data?.defaultPrice ? data?.defaultPrice : data?.price) /
              100}
          </div>
          <button className="bg-red px-6 py-1 rounded-full text-white">
            Add
          </button>
        </div>
      </div>
      <div
        className={`${
          data?.itemAttribute?.vegClassifier === "NONVEG"
            ? "border-red"
            : "border-green"
        } absolute h-[13px] w-[13px] border  bg-white top-0 right-0 m-2`}
      >
        <div
          className={`${
            data?.itemAttribute?.vegClassifier === "NONVEG"
              ? "bg-red"
              : "bg-green"
          } h-[8px] w-[8px]  rounded-full getCentred`}
        ></div>
      </div>
    </div>
  );
}

export default MenuCard;
