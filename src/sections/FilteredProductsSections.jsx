import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const FilteredProductsSections = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(12);

  // Slice products according to visible count
  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12); // load 10 more
  };

  return (
    <div className="mt-24 ml-40 pl-36">
      {/* Products Grid */}
      <h1 className="px-10 font-bold text-2xl text-secondary">Products</h1>
      <div className="flex flex-wrap justify-around ">
        {visibleProducts.map((product, idx) => (
          <ProductCard
            key={product.id || idx}
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            images={product.images}
            description={product.description}
            rating={product.rating}
            slug={product.slug}
            specialCollections={product.specialCollections}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default FilteredProductsSections;
