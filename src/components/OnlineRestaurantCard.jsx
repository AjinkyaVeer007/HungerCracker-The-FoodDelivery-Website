import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleActive } from "../store/activeSlice";

function OnlineRestaurantCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (!id) return;
    dispatch(
      handleActive({
        name: "restaurantId",
        value: id,
      })
    );
    navigate("/restaurantmenu");
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-start lg:gap-10 shadow-md cursor-pointer rounded-lg hover:scale-95 transition-all ease-in-out">
      <img
        className="h-[200px] w-[300px] object-cover object-center rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.cloudinaryImageId}`}
        alt="img"
      />
      <div className="py-2 lg:px-0 px-4 h-full relative">
        <div className="font-medium text-base truncate w-[200px]">
          {data?.name}
        </div>
        <p className="text-secondary text-[12px]">{data?.locality}</p>
        <p className="text-red font-medium text-[11px]">
          Delivered in {data?.sla?.slaString}
        </p>
        <button
          onClick={() => handleClick(data?.id)}
          className="lg:absolute lg:bottom-0 lg:mb-5 lg:mt-0 mt-4 rounded-full bg-red px-6 py-2 text-white text-[11px]"
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default OnlineRestaurantCard;
