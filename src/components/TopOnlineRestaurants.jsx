import React from "react";
import { useSelector } from "react-redux";
import OnlineRestaurantCard from "./OnlineRestaurantCard";

function TopOnlineRestaurants() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const restaurantList =
    dashboardDetails &&
    dashboardDetails[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="p-4">
      <div className="text-primary text-2xl mb-6 font-bold">
        {dashboardDetails && dashboardDetails[2]?.card?.card?.title}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {restaurantList
          ? restaurantList.map((resto) => {
              return (
                <OnlineRestaurantCard
                  key={resto?.info?.id}
                  data={resto?.info}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default TopOnlineRestaurants;
