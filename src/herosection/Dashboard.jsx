import React, { useEffect } from "react";
import { useGlobalApiHandler } from "../utils/useGlobalApiHandler";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { handleDashboardData } from "../store/dashboardDataSlice";
import Categories from "../components/Categories";
import TopRestaurants from "../components/TopRestaurants";
import TopOnlineRestaurants from "../components/TopOnlineRestaurants";
import Divider from "../components/Divider";

function Dashboard() {
  const dashboardDetails = useSelector((state) => state.dashboardData.data);

  const apiHandler = useGlobalApiHandler();
  const dispatch = useDispatch();

  const getDashboardData = async () => {
    const apiData = {
      method: "get",
      url:
        BASE_URL +
        "restaurants/list/v5?lat=19.0330488&lng=73.0296625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    };

    const response = await apiHandler(apiData);

    if (response?.data) {
      dispatch(handleDashboardData(response?.data?.cards));
    }
  };

  useEffect(() => {
    !dashboardDetails && getDashboardData();
  }, []);

  return (
    <div className="lg:mx-20 mx-6">
      <Categories />
      <Divider />
      <TopRestaurants />
      <Divider />
      <TopOnlineRestaurants />
    </div>
  );
}

export default Dashboard;
