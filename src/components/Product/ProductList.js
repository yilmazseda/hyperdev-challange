import React from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
  return (
    <div className="mx-auto container px-6 xl:px-0 py-12 ">
      <div className="flex flex-col">
        <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
