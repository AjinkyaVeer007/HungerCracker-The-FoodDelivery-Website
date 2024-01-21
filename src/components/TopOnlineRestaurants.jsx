import React from "react";
import { useSelector } from "react-redux";
import OnlineRestaurantCard from "./OnlineRestaurantCard";

function TopOnlineRestaurants() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const restaurantList =
    dashboardDetails[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  console.log(dashboardDetails);

  return (
    <div className="my-6">
      <div className="text-primary text-2xl mb-6 text-center font-bold">
        {dashboardDetails[2]?.card?.card?.title}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
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
