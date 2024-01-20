import React, { useEffect, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { handleActive } from "../store/activeSlice";
import { useGlobalApiHandler } from "../utils/useGlobalApiHandler";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";

function Sidebar() {
  const activeCategory = useSelector((state) => state.activeData.category);

  const apiHandler = useGlobalApiHandler();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = {
      method: "get",
      url: BASE_URL + "products/categories/",
    };

    const response = await apiHandler(data);
    if (response) {
      setCategories(response);
    }
  };

  const handleActiveCategory = (name) => {
    dispatch(
      handleActive({
        name: "category",
        value: name,
      })
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="pl-2 pb-20">
      <div className="text-secondary text-base flex justify-between px-2 mb-3">
        <div>Categories</div>
        <RiArrowDropDownFill />
      </div>
      {categories.length
        ? categories.map((category) => {
            return (
              <div
                key={category}
                className="text-[14px] pl-3 text-secondary cursor-pointer mb-2"
              >
                {category}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Sidebar;
