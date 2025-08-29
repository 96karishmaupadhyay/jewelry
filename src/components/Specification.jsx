import React, { useState } from "react";

const Specification = ({product}) => {
  const [showSpecs, setShowSpecs] = useState(true);

  // Example Jewelry Specifications
  const specifications = [
    { type: "Brand", detail: "Tanishq" },
    { type: "Collection", detail: "Eterna Diamond" },
    { type: "Product Type", detail: "Diamond Ring" },
    { type: "Metal Purity", detail: "18K Yellow Gold" },
    { type: "Metal Weight", detail: "6.5 grams" },
    { type: "Stone Type", detail: "Natural Diamond" },
    { type: "Total Carat Weight", detail: "0.45 ct" },
    { type: "Diamond Clarity", detail: "VVS1" },
    { type: "Diamond Color", detail: "F" },
    { type: "Certification", detail: "BIS Hallmarked & IGI Certified" },
    { type: "Occasion", detail: "Engagement, Anniversary" },
    { type: "Ideal For", detail: "Women" },
  ];

  return (
    <div className="w-full mx-auto p-4 bg-white  rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-first pb-2">
          Product Specifications
        </h2>
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="text-secondary hover:underline ml-4"
        >
          {showSpecs ? "Hide" : "Show"}
        </button>
      </div>

      {showSpecs && (
        <ul className="mt-4">
          {specifications.map((spec, index) => (
            <li
              key={index}
              className="flex justify-between py-2 border-b border-gray-300"
            >
              <span className="font-medium text-gray-700">{spec.type}</span>
              <span className="text-gray-600">{spec.detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Specification;
