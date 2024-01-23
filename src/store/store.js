import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import activeSlice from "./activeSlice";
import dashboardDataSlice from "./dashboardDataSlice";
import cartSlice from "./cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  activeData: activeSlice,
  dashboardData: dashboardDataSlice,
  cartData: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
