import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-4 sticky top-0 bg-white z-10 ">
      <div
        onClick={() => navigate("/")}
        className="text-4xl font-medium text-red font-logo cursor-pointer"
      >
        HungerCracker
      </div>
    </div>
  );
}

export default Navbar;
