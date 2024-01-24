import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Divider from "../components/Divider";
import MenuCard from "../components/MenuCard";
import emptycartImg from "../assets/emptyCart.svg";

function Cart() {
  const cartItems = useSelector((state) => state.cartData.data);

  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    let total = cartItems.reduce((acc, curr) => {
      return acc + (curr.price ? curr.price : curr.defaultPrice);
    }, 0);

    setTotalPrice(Number(total) / 100);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cartItems]);

  return (
    <div className="lg:mx-10 md:mx-6 mx-4 pb-20">
      <div className="text-2xl text-primary font-bold text-center mt-6">
        Your Cart {cartItems.length > 1 ? "Items" : "Item"}
      </div>
      <div className="text-center text-red font-medium text-base">
        Total Price = {"₹"} {totalPrice}
      </div>
      <Divider />
      {cartItems?.length ? (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4">
          {cartItems.length
            ? cartItems.map((data) => {
                return <MenuCard key={data?.id} data={data} />;
              })
            : ""}
        </div>
      ) : (
        <div>
          <img className="w-96 mx-auto" src={emptycartImg} alt="img" />
          <div className="text-center text-2xl font-bold">
            Your cart is empty
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
