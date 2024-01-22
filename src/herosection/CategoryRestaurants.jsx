import React, { useEffect, useState } from "react";
import { useGlobalApiHandler } from "../utils/useGlobalApiHandler";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import OnlineRestaurantCard from "../components/OnlineRestaurantCard";

function CategoryRestaurants() {
  const apiHandler = useGlobalApiHandler();
  const categoryId = useSelector((state) => state.activeData.categoryId);

  const [headingData, setHeadingData] = useState({
    title: "",
    description: "",
  });
  const [restoList, setRestoList] = useState([]);

  const getRestaurantList = async () => {
    const apiData = {
      method: "get",
      url:
        BASE_URL +
        "restaurants/list/v5?lat=19.0330488&lng=73.0296625&collection=" +
        categoryId +
        "&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    };
    const response = await apiHandler(apiData);

    if (response?.data) {
      setHeadingData((prev) => ({
        ...prev,
        title: response?.data?.cards[0]?.card?.card?.title,
        description: response?.data?.cards[0]?.card?.card?.description,
      }));

      let restoData = [];
      for (let i = 2; i < response?.data?.cards?.length; i++) {
        restoData.push(response?.data?.cards[i]?.card?.card?.info);
      }
      setRestoList(restoData);
    }
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div className="px-20">
      <div className="font-bold text-4xl text-primary mb-2">
        {headingData?.title}
      </div>
      <p className="text-secondary mb-10">{headingData?.description}</p>
      <div className="grid grid-cols-2 gap-10 pb-10">
        {restoList
          ? restoList.map((resto) => {
              return <OnlineRestaurantCard key={resto?.id} data={resto} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default CategoryRestaurants;
