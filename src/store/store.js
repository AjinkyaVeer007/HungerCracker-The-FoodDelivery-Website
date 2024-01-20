import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeSlice from "./activeSlice";

const reducer = combineReducers({
  activeData: activeSlice,
});

const store = configureStore({
  reducer,
});

export default store;
