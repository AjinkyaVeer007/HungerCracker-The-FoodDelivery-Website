import React from "react";
import TopRestoCard from "./TopRestoCard";
import { useSelector } from "react-redux";
import TopRestoShimmer from "./shimmers/TopRestoShimmer";

function TopRestaurants() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const restaurantList =
    dashboardDetails &&
    dashboardDetails[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <>
      {restaurantList?.length ? (
        <div className="lg:p-4 p-0 overflow-hidden">
          <div className="text-primary lg:text-2xl md:text-xl text-lg font-bold mb-6">
            {dashboardDetails && dashboardDetails[1]?.card?.card?.header?.title}
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
      ) : (
        <TopRestoShimmer />
      )}
    </>
  );
}

export default TopRestaurants;
