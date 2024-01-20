import React from "react";
import Categories from "../components/Categories";
import ProductList from "./ProductList";
import BestChoice from "../components/BestChoice";

function Dashboard() {
  return (
    <div className="mx-6">
      <BestChoice />
      <Categories />
      <ProductList />
    </div>
  );
}

export default Dashboard;
