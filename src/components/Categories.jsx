import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleActive } from "../store/activeSlice";
import { useNavigate } from "react-router-dom";
import CategoriesShimmer from "./shimmers/CategoriesShimmer";

function Categories() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryList =
    dashboardDetails &&
    dashboardDetails[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  const handleClick = (id) => {
    const regex = /collection_id=(\d+)/;
    const match = id.match(regex);

    if (match) {
      const collectionId = match[1];
      dispatch(
        handleActive({
          name: "categoryId",
          value: collectionId,
        })
      );
      navigate("/categoryrestaurants");
    } else {
      console.log("Collection ID not found");
    }
  };

  return (
    <>
      {categoryList?.length ? (
        <div className="lg:p-4 p-0 overflow-hidden relative">
          <div className="font-bold text-primary lg:text-2xl md:text-xl text-lg mb-4">
            {dashboardDetails && dashboardDetails[0]?.card?.card?.header?.title}
          </div>
          <div className="relative">
            <div className="flex gap-2 items-center overflow-auto hidescrollbar pr-14">
              {categoryList?.length
                ? categoryList.map((category) => {
                    return (
                      <img
                        onClick={() => handleClick(category?.entityId)}
                        className="lg:w-[150px] md:w-[120px] w-[80px] hover:scale-95 transition ease-in-out cursor-pointer rounded-lg"
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
            <div className="absolute h-full lg:w-[100px] md:w-[80px] w-[50px] right-0 bg-gradient-to-l from-white top-0"></div>
          </div>
        </div>
      ) : (
        <CategoriesShimmer />
      )}
    </>
  );
}

export default Categories;
