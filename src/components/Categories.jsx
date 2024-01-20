import React, { useEffect, useState } from "react";
import { useGlobalApiHandler } from "../utils/useGlobalApiHandler";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { handleActive } from "../store/activeSlice";

function Categories() {
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
    <>
      {categories.length ? (
        <div className="relative flex mt-6 mx-4">
          <div className="flex justify-start text-nowrap overflow-auto hidescrollbar pr-20 items-center gap-4 font-sans text-[14px]">
            <div
              onClick={() => handleActiveCategory(null)}
              className={`${
                !activeCategory ? "text-primary" : "text-secondary"
              } cursor-pointer transition ease-in-out`}
            >
              <div>All</div>
              <div
                className={`${
                  !activeCategory ? "bg-red" : "bg-transparent"
                } w-[10px] h-1  rounded m-auto`}
              ></div>
            </div>
            {categories.length &&
              categories.map((category) => {
                return (
                  <div
                    onClick={() => handleActiveCategory(category)}
                    key={category}
                    className={`${
                      activeCategory === category
                        ? "text-primary"
                        : "text-secondary"
                    } cursor-pointer transition ease-in-out capitalize`}
                  >
                    <div>{category}</div>
                    <div
                      className={`${
                        activeCategory === category
                          ? "bg-red"
                          : "bg-transparent"
                      } w-[10px] h-1  rounded m-auto`}
                    ></div>
                  </div>
                );
              })}
          </div>
          <div className="absolute w-20 h-[100%] bg-gradient-to-l from-white right-0"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Categories;
