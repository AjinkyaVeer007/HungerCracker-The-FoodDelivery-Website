import React from "react";
import { useSelector } from "react-redux";

function Categories() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const categoryList =
    dashboardDetails[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  return (
    <div className="bg-red px-4 py-10 rounded-lg overflow-hidden relative">
      <div className="font-medium text-white text-2xl mb-4">
        {dashboardDetails[0]?.card?.card?.header?.title}
      </div>
      <div className="relative">
        <div className="flex gap-2 items-center overflow-auto hidescrollbar pr-14">
          {categoryList?.length
            ? categoryList.map((category) => {
                return (
                  <img
                    className="w-[120px] hover:scale-95 transition ease-in-out cursor-pointer rounded-lg"
                    key={category?.id}
                    alt="img"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                      `${category?.imageId}`
                    }
                  />
                );
              })
            : ""}
        </div>
        <div className="absolute h-full w-[100px] right-0 bg-gradient-to-l from-red top-0"></div>
      </div>
    </div>
  );
}

export default Categories;
