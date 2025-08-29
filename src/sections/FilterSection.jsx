import React, { useState } from "react";
import {ChevronDown ,ChevronUp} from "lucide-react";

const FilterSection = (products) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMetals, setSelectedMetals] = useState([]);
  const [selectedStones, setSelectedStones] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [rating, setRating] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // dropdown state
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = ["Necklace", "Earrings", "Rings", "Bracelets"];
  const metals = ["Gold", "Silver", "Platinum"];
  const stones = ["Diamond", "Ruby", "Emerald", "Sapphire"];
  const brands = ["Brand A", "Brand B", "Brand C"];

  const toggleSelection = (value, selectedArray, setSelected) => {
    if (selectedArray.includes(value)) {
      setSelected(selectedArray.filter((item) => item !== value));
    } else {
      setSelected([...selectedArray, value]);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Filter content reused for desktop & mobile
  const filterContent = (
    <div className="p-4 space-y-6">
      <h3 className="text-xl font-semibold mb-2">Filters</h3>

      {/* Category Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("category")}
        >
          Category {openDropdown === "category" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "category" && (
          <div className="space-y-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() =>
                    toggleSelection(cat, selectedCategories, setSelectedCategories)
                  }
                  className="form-checkbox h-4 w-4 text-secondary"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Metal Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("metal")}
        >
          Metal {openDropdown === "metal" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "metal" && (
          <div className="space-y-1">
            {metals.map((metal) => (
              <label key={metal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMetals.includes(metal)}
                  onChange={() =>
                    toggleSelection(metal, selectedMetals, setSelectedMetals)
                  }
                  className="form-checkbox h-4 w-4 text-secondary"
                />
                <span>{metal}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Stone Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("stone")}
        >
          Stone {openDropdown === "stone" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "stone" && (
          <div className="space-y-1">
            {stones.map((stone) => (
              <label key={stone} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedStones.includes(stone)}
                  onChange={() =>
                    toggleSelection(stone, selectedStones, setSelectedStones)
                  }
                  className="form-checkbox h-4 w-4 text-secondary"
                />
                <span>{stone}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("price")}
        >
          Price {openDropdown === "price" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "price" && (
          <div>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <p className="text-sm mt-1">Up to ₹{priceRange[1]}</p>
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("brand")}
        >
          Brand {openDropdown === "brand" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "brand" && (
          <div className="space-y-1">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-secondary" />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div>
        <button
          className="flex justify-between w-full font-medium mb-2"
          onClick={() => toggleDropdown("rating")}
        >
          Rating {openDropdown === "rating" ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openDropdown === "rating" && (
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((rate) => (
              <label key={rate} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === rate}
                  onChange={() => setRating(rate)}
                  className="form-radio h-4 w-4 text-secondary"
                />
                <span>{rate} & up</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button className="w-full py-2 bg-secondary text-white font-semibold rounded hover:bg-secondary/80 transition">
        Apply Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-20 left-0 w-72 h-[90vh] overflow-y-auto bg-white shadow-md z-20">
        {filterContent}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <button
          className="px-4 py-2 bg-secondary text-white rounded-lg shadow-lg"
          onClick={() => setMobileOpen(true)}
        >
          Filters
        </button>
      </div>

      {/* Mobile Modal */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex justify-end">
          <div className="w-3/4 bg-white h-full overflow-y-auto shadow-lg animate-slideIn">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-secondary font-bold text-xl"
              >
                ✕
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FilterSection;
