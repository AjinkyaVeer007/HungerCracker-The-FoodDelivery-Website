import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

function MenuView({ data }) {
  const [activeSuggestion, setActiveSuggestion] = useState("");
  const [menuCardData, setMenuCardData] = useState([]);

  const handleClick = (menuData) => {
    setActiveSuggestion(menuData?.card?.card?.title);
    setMenuCardData(menuData?.card?.card?.itemCards);
  };

  useEffect(() => {
    setActiveSuggestion(data ? data[0]?.card?.card?.title : "");
    setMenuCardData(data ? data[0]?.card?.card?.itemCards : []);
  }, [data]);

  return (
    <div>
      <div className="relative">
        <div className="pr-20 flex overflow-auto hidescrollbar items-center gap-6 text-nowrap">
          {data
            ? data.map((title) => {
                return (
                  <div
                    onClick={() => handleClick(title)}
                    key={title?.card?.card?.title}
                    className={`${
                      activeSuggestion === title?.card?.card?.title
                        ? "text-red"
                        : "text-secondary "
                    } cursor-pointer text-[13px] font-medium transition-all ease-in-out`}
                  >
                    {title?.card?.card?.title}
                  </div>
                );
              })
            : ""}
        </div>
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-white"></div>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-6 mx-4 mt-6">
        {menuCardData
          ? menuCardData.map((menu) => {
              return (
                <MenuCard key={menu?.card?.info?.id} data={menu?.card?.info} />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default MenuView;
