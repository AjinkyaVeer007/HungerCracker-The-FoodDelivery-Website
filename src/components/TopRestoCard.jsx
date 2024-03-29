import React from "react";
import { useDispatch } from "react-redux";
import { handleActive } from "../store/activeSlice";
import { useNavigate } from "react-router-dom";

function TopRestoCard({ data }) {
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
    <div
      onClick={() => handleClick(data?.id)}
      style={{
        backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.cloudinaryImageId})`,
      }}
      className="relative lg:h-[200px] md:h-[200px] h-[150px] lg:w-[300px] md:w-[300px] w-[230px] rounded-lg bg-no-repeat bg-cover bg-center cursor-pointer hover:scale-95 transition-all ease-in-out"
    >
      <div className="rounded-lg absolute bottom-0 left-0 w-[100%] h-2/3 bg-gradient-to-t from-dark"></div>
      <div className="absolute bottom-0 left-[50%] text-white text-nowrap translate-x-[-50%] mb-2">
        <div className="font-bold lg:text-xl md:text-xl text-base">
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
