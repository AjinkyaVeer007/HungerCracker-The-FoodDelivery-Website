import { useDispatch } from "react-redux";
import { addToCart, removeCartItem } from "../store/cartSlice";

export const useAddToCart = () => {
  const dispatch = useDispatch();
  return function (data) {
    dispatch(addToCart(data));
  };
};

export const useRemoveCart = () => {
  const dispatch = useDispatch();
  return function (id) {
    dispatch(removeCartItem(id));
  };
};
