import React from "react";
import TopRestoCard from "./TopRestoCard";
import { useSelector } from "react-redux";

function TopRestaurants() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const restaurantList =
    dashboardDetails[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="my-6 overflow-hidden">
      <div className="text-primary text-2xl font-medium mb-6">
        {dashboardDetails[1]?.card?.card?.header?.title}
      </div>
      <div className="relative overflow-auto hidescrollbar">
        <div className="flex items-center justify-start gap-4 w-max">
          {restaurantList
            ? restaurantList.map((resto) => {
                return (
                  <TopRestoCard key={resto?.info?.id} data={resto?.info} />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default TopRestaurants;
