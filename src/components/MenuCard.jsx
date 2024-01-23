import React from "react";
import { useSelector } from "react-redux";
import { useAddToCart, useRemoveCart } from "../utils/useCart";

function MenuCard({ data }) {
  const cartItemsId = useSelector((state) => state.cartData.itemArray);

  const handleAddToCart = useAddToCart();
  const handleRemoveCart = useRemoveCart();

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
          {cartItemsId.includes(data?.id) ? (
            <button
              onClick={() => handleRemoveCart(data?.id)}
              className="bg-tomato px-4 py-1 rounded-full text-[13px] text-white"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(data)}
              className="bg-red px-4 py-1 rounded-full text-[13px] text-white"
            >
              Add
            </button>
          )}
        </div>
      </div>
      <div
        className={`${
          data?.itemAttribute?.vegClassifier === "NONVEG"
            ? "border-red"
            : "border-green"
        } absolute h-[13px] w-[13px] border  bg-white top-0 right-0 m-2 flex items-center justify-center`}
      >
        <div
          className={`${
            data?.itemAttribute?.vegClassifier === "NONVEG"
              ? "bg-red"
              : "bg-green"
          } h-[8px] w-[8px]  rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default MenuCard;
