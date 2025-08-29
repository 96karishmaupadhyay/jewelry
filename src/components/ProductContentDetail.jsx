// import { CheckCircle, CreditCard } from "lucide-react";

// export default function ProductContentDetail({products}) {
//   console.log(products)
//   window.onload = function () {
//     window.scrollTo(0, 0);
//   };

//   // Example Jewelry product data
//   const product = {
//     id: 101,
//     title: "18K Gold Diamond Ring",
//     price: 75000,
//     originalPrice: 85000,
//     discountPercentage: 12,
//     rating: 4.7,
//     reviewsCount: 128,
//     stock: true,

//     description:
//       "A stunning 18K yellow gold diamond ring crafted with precision. Perfect for engagements, anniversaries, or everyday elegance. Certified by IGI for authenticity.",

//     highlights: [
//       "18K Yellow Gold",
//       "Total Weight: 6.5 grams",
//       "Diamond Carat: 0.45 ct",
//       "Clarity: VVS1 | Color: F",
//       "Hallmarked by BIS & IGI Certified",
//     ],

//     bankOffers: [
//       "5% Instant Discount on HDFC Bank Credit Card Transactions",
//       "Flat ₹2000 off on ICICI Bank Credit/Debit Cards",
//       "No Cost EMI available on Bajaj Finserv EMI Card",
//       "Extra ₹1500 off on Axis Bank Credit Card Full Swipe",
//     ],
//   };

//   return (
//     <div className="p-4 pt-2 max-w-3xl mx-auto bg-white rounded-sm ">
//       {/* Title */}
//       <h1 className="text-2xl font-bold mt-4 text-gray-900">{product.title}</h1>

//       {/* Rating & Reviews */}
//       <div className="flex items-center mt-2">
//         <span className="bg-second text-secondary px-2 py-1 rounded text-sm font-semibold ">
//           ★ {product.rating}
//         </span>
//         <span className="ml-2 text-gray-600">{product.reviewsCount} Reviews</span>
//       </div>

//       {/* Price & Discount */}
//       <div className="mt-2 flex items-center gap-3">
//         <p className="text-2xl font-bold text-first">₹{product.price.toLocaleString()}</p>
//         <p className="line-through text-gray-500 text-lg">
//           ₹{product.originalPrice.toLocaleString()}
//         </p>
//         <p className="text-green-600 font-semibold">{product.discountPercentage}% off</p>
//       </div>

//       {/* Stock Status */}
//       <p
//         className={`mt-1 font-medium ${
//           product.stock ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {product.stock ? "In Stock" : "Out of Stock"}
//       </p>

//       {/* ✅ Bank Offers */}
//       <div className="mt-3">
//         <h2 className="text-lg font-semibold mb-2 pl-1">Bank Offers</h2>
//         <ul className="pl-1 text-gray-800">
//           {product.bankOffers.map((offer, index) => (
//             <li key={index} className="flex items-start gap-2 mb-1">
//               <CreditCard className="text-secondary w-[14px] h-[14px] mt-1" />
//               <span className="text-sm">{offer}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Highlights */}
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold mb-1 pl-1">Product Details</h2>
//         <ul className="pl-1 text-first">
//           {product.highlights.map((item, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <CheckCircle className="text-secondary w-[12px] h-[12px]" />
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Description */}
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold ">Product Description</h2>
//         <p className="text-gray-700">{product.description}</p>
//       </div>
//     </div>
//   );
// }


// import { CheckCircle, CreditCard } from "lucide-react";

// export default function ProductContentDetail({product}) {
//   console.log(product)
//   window.onload = function () {
//     window.scrollTo(0, 0);
//   };

//   // Example Jewelry product data
//   // const product = {
//   //   id: 101,
//   //   title: "18K Gold Diamond Ring",
//   //   price: 75000,
//   //   originalPrice: 85000,
//   //   discountPercentage: 12,
//   //   rating: 4.7,
//   //   reviewsCount: 128,
//   //   stock: true,

//   //   description:
//   //     "A stunning 18K yellow gold diamond ring crafted with precision. Perfect for engagements, anniversaries, or everyday elegance. Certified by IGI for authenticity.",

//   //   highlights: [
//   //     "18K Yellow Gold",
//   //     "Total Weight: 6.5 grams",
//   //     "Diamond Carat: 0.45 ct",
//   //     "Clarity: VVS1 | Color: F",
//   //     "Hallmarked by BIS & IGI Certified",
//   //   ],

//   //   bankOffers: [
//   //     "5% Instant Discount on HDFC Bank Credit Card Transactions",
//   //     "Flat ₹2000 off on ICICI Bank Credit/Debit Cards",
//   //     "No Cost EMI available on Bajaj Finserv EMI Card",
//   //     "Extra ₹1500 off on Axis Bank Credit Card Full Swipe",
//   //   ],
//   // };

//   return (
//     <div className="p-4 pt-2 max-w-3xl mx-auto bg-white rounded-sm ">
//       {/* Title */}
//       <h1 className="text-2xl font-bold mt-4 text-gray-900">{product.name}</h1>

//       {/* Rating & Reviews */}
//       <div className="flex items-center mt-2">
//         <span className="bg-second text-secondary px-2 py-1 rounded text-sm font-semibold ">
//           ★ {product.rating}
//         </span>
//         <span className="ml-2 text-gray-600">{product.reviewsCount} Reviews</span>
//       </div>

//       {/* Price & Discount */}
//       <div className="mt-2 flex items-center gap-3">
//         <p className="text-2xl font-bold text-first">₹{product.price.toLocaleString()}</p>
//         <p className="line-through text-gray-500 text-lg">
//           ₹{product.originalPrice.toLocaleString()}
//         </p>
//         <p className="text-green-600 font-semibold">{product.discountPercentage}% off</p>
//       </div>

//       {/* Stock Status */}
//       <p
//         className={`mt-1 font-medium ${
//           product.stock ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {product.stock ? "In Stock" : "Out of Stock"}
//       </p>

//       {/* ✅ Bank Offers */}
//       <div className="mt-3">
//         <h2 className="text-lg font-semibold mb-2 pl-1">Bank Offers</h2>
//         <ul className="pl-1 text-gray-800">
//           {product.bankOffers.map((offer, index) => (
//             <li key={index} className="flex items-start gap-2 mb-1">
//               <CreditCard className="text-secondary w-[14px] h-[14px] mt-1" />
//               <span className="text-sm">{offer}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Highlights */}
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold mb-1 pl-1">Product Details</h2>
//         <ul className="pl-1 text-first">
//           {product.highlights.map((item, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <CheckCircle className="text-secondary w-[12px] h-[12px]" />
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Description */}
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold ">Product Description</h2>
//         <p className="text-gray-700">{product.description}</p>
//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";
import { CheckCircle, CreditCard, Package, Tag } from "lucide-react";

export default function ProductContentDetail({ product }) {
  console.log(product);

  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 pt-2 bg-white rounded-sm">
      {/* Title */}
      <h1 className="text-2xl font-bold mt-4 text-gray-900">{product.name}</h1>

      {/* SKU & Category */}
      <p className="text-sm text-gray-500">
        SKU: {product.sku} | {product.category} / {product.subCategory}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-2 ">
        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-semibold">
          ★ {product.rating}
        </span>
        <span className="ml-2 text-gray-600">
          {product.reviews?.length || 0} Reviews
        </span>
      </div>

      {/* Price & Discount */}
      <div className="mt-3 flex items-center gap-3">
        <p className="text-2xl font-bold text-first">
          ₹{product.price.toLocaleString()}
        </p>
        {product.discount && (
          <p className="text-green-600 font-semibold">{product.discount}</p>
        )}
      </div>

      {/* Stock */}
      <p
        className={`mt-1 font-medium ${
          product.isAvailable ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.isAvailable
          ? `In Stock (${product.stock} left)`
          : "Out of Stock"}
      </p>

      {/* Variants (sizes) */}
      {product.variants && (
        <div className="mt-3">
          <h2 className="text-lg font-semibold mb-1">Available Sizes</h2>
          <div className="flex gap-2 flex-wrap">
            {product.variants.map((v, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded border text-sm ${
                  v.stock > 0
                    ? "border-green-500 text-green-600"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                Size {v.size} ({v.stock} left)
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Special Collections */}
      {product.specialCollections?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Special Collections</h2>
          <div className="flex flex-wrap gap-2">
            {product.specialCollections.map((col, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full flex items-center gap-1"
              >
                <Tag className="w-3 h-3" /> {col}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Material */}
      {product.material && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Material</h2>
          <ul className="pl-1 text-first">
            {Object.entries(product.material).map(([key, value]) => (
              <li key={key} className="flex items-center gap-2">
                <CheckCircle className="text-secondary w-[12px] h-[12px]" />
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Weight */}
      <div className="mt-2 text-gray-700">
        <Package className="inline-block w-4 h-4 mr-1" />
        Weight: {product.weight}g ({product.weightRange})
      </div>

      {/* Shop For & Occasion */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Best For</h2>
        <p>
          {product.shopFor} | {product.occasion.join(", ")}
        </p>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
