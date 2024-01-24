import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Smiley from "../assets/smiley.svg";
import { useSelector } from "react-redux";
import { IoChevronBack } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const cartItem = useSelector((state) => state.cartData.itemArray);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    cartItem.length
      ? navigate("/cart")
      : toast.error("Your cart is empty", { duration: 1000 });
  };

  return (
    <>
      <Toaster />
      <div className="text-center p-4 sticky flex top-0 bg-white z-10">
        {location.pathname !== "/" && (
          <IoChevronBack
            className="cursor-pointer"
            size={"20px"}
            onClick={() => navigate(-1)}
          />
        )}
        <div
          onClick={() => navigate("/")}
          className="lg:text-4xl md:text-3xl text-2xl ml-auto font-medium text-red font-logo cursor-pointer"
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
    </>
  );
}
export default Navbar;
