import React from "react";
import { useSelector } from "react-redux";
import OnlineRestaurantCard from "./OnlineRestaurantCard";
import OnlineRestoShimmer from "./shimmers/OnlineRestoShimmer";

function TopOnlineRestaurants() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const restaurantList =
    dashboardDetails &&
    dashboardDetails[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <>
      {restaurantList?.length ? (
        <div className="p-4">
          <div className="text-primary lg:text-2xl md:text-xl text-lg mb-6 font-bold">
            {dashboardDetails && dashboardDetails[2]?.card?.card?.title}
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
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
      ) : (
        <OnlineRestoShimmer />
      )}
    </>
  );
}

export default TopOnlineRestaurants;
