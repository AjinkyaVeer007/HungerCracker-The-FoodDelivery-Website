import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGlobalApiHandler } from "../utils/useGlobalApiHandler";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";

function ProductList() {
  const apiHandler = useGlobalApiHandler();
  const activeCategory = useSelector((state) => state.activeData.category);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const apiData = {
      method: "get",
      url: activeCategory
        ? BASE_URL + "products/category/" + activeCategory
        : BASE_URL + "products/",
    };

    const response = await apiHandler(apiData);

    if (response?.products) {
      setProducts(response?.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, [activeCategory]);
  return (
    <div className="grid grid-cols-3 gap-10 mt-6 pb-20">
      {products.length
        ? products.map((data) => {
            return <ProductCard key={data?.id} data={data} />;
          })
        : ""}
    </div>
  );
}

export default ProductList;
