import React from "react";
import { useNavigate } from "react-router-dom";
import Smiley from "../assets/smiley.svg";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItem = useSelector((state) => state.cartData.itemArray);

  const navigate = useNavigate();

  const handleClick = () => {
    cartItem.length ? navigate("/cart") : "";
  };

  return (
    <div className="text-center p-4 sticky flex top-0 bg-white z-10">
      <div
        onClick={() => navigate("/")}
        className="text-4xl ml-auto font-medium text-red font-logo cursor-pointer"
      >
        HungerCracker
      </div>
      <div onClick={handleClick} className="ml-auto relative cursor-pointer">
        <img className="h-[40px]" src={Smiley} alt="" />
        <div className="absolute h-[20px] w-[20px] rounded-full bg-red top-[-5px] right-[-5px] flex items-center justify-center">
          <div className="text-[10px] text-white font-bold">
            {cartItem.length}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
