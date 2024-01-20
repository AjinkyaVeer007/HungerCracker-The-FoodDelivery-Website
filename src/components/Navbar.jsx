import React from "react";
import { BsCartFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-center p-3 sticky top-0 bg-white z-10">
      <div className="text-red text-2xl font-logo">UniqueFinds</div>
      <div className="absolute right-0 flex pr-3">
        <BsCartFill className="text-primary" />
      </div>
    </div>
  );
}

export default Navbar;
