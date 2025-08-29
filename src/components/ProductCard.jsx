

// import React from "react";
// import { Heart } from "lucide-react";

// const ProductCard = ({ type, name, price, discount, images, description, rating ,specialCollections }) => {
//     const [isHovered, setIsHovered] = React.useState(false);

 
//     const getCardClasses = () => {
//         let baseStyle =
//             "bg-white shadow-md p-4 w-64  flex flex-col  transform scale-[0.98]   transition-transform duration-300  hover:scale-100 rounded-lg   overflow:visible"

//         switch (type) {
//             case "arrival":
//                 return `${baseStyle} arrival-card`;
//             case "sale":
//                 return `${baseStyle}  relative sale-card`;
//             case "offer":
//                 return `${baseStyle} offer-card`;
//             default:
//                 return `${baseStyle}  category-card`;
//         }
//     };

//     // Render star rating
//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <svg
//                     key={i}
//                     className={`inline-block h-4 w-4 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                 >
//                     <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36" />
//                 </svg>
//             );
//         }
//         return stars;
//     };

//     return (
//         <div
//             className={getCardClasses()}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="relative h-40">
//                 <img
//                     src={isHovered && images[1] ? images[1] : images[0]}
//                     alt={name}
//                     className="w-full h-full object-cover rounded-md cursor-pointer "
//                 />

//                 {/* Sale Ribbon */}
//                 {specialCollections.includes("On Sale")  && (
//                     <span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-xs animate-bounce rounded-full">
//                         Sale {discount}
//                     </span>
//                 )}

//                 {/* Offer Glow */}
//                 {type === "offer" && (
//                     <span className="absolute bottom-2 left-2 bg-secondary text-primary font-semibold px-2 py-1 text-xs rounded-full">
//                         Offer
//                     </span>
//                 )}

//                 {/* Arrival Badge */}
//                 {type === "arrival" && (
//                     <span className="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 text-xs rounded-lg">
//                         New
//                     </span>
//                 )}

//                 {/* Wishlist Heart Icon */}
//                 <button
//                     className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
//                     name="Add to Wishlist"
//                 >
//                     <Heart className="h-5 w-5" />
//                 </button>
//             </div>

//             <h3 className="mt-3 text-lg font-semibold truncate" title={name}>
//                 {name}
//             </h3>
//             <div className="flex items-center gap-1 mt-1">{renderStars(rating)}</div>
//             <p className="text-black font-medium">₹{price}</p>

//             {/* Description with ellipsis + tooltip */}
//             <p
//                 className="text-gray-500 text-sm mt-1 line-clamp-2 overflow-hidden text-ellipsis"
//                 title={description}
//                 style={{
//                     display: "-webkit-box",
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: "vertical",
//                     overflow: "hidden",
//                 }}
//             >
//                 {description}
//             </p>

//             <div className="mt-4 flex gap-2">
//                 {specialCollections.includes("On Sale") ? (
//                     <button className="rounded-sm bg-secondary text-white px-4 py-2 w-full font-semibold transition-all duration-200 hover:opacity-80 hover:scale-105 shadow">
//                         Book Now
//                     </button>
//                 ) : (
//                     <button className="rounded-sm bg-secondary text-white px-4 py-2 w-full font-semibold transition-all duration-200 hover:opacity-80 hover:scale-105 shadow">
//                         View Offer
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCard;



















import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  type,
  name,
  price,
  discount,
  images,
  description,
  rating,
  specialCollections = [] ,// ✅ default to empty array to avoid undefined,
  slug
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate=useNavigate()
  // Dynamic card styles
  const getCardClasses = () => {
    let baseStyle =
      "bg-white shadow-md p-4 w-64 flex flex-col transform scale-[0.98] transition-transform duration-300 hover:scale-100 rounded-lg overflow-visible";

    switch (type) {
      case "arrival":
        return `${baseStyle} arrival-card`;
      case "sale":
        return `${baseStyle} relative sale-card`;
      case "offer":
        return `${baseStyle} offer-card`;
      default:
        return `${baseStyle} category-card`;
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`inline-block h-4 w-4 ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div
      className={getCardClasses()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40"  onClick={() => navigate(`/product/${slug}`)} >
        <img
          src={isHovered && images?.[1] ? images[1] : images?.[0]}
          alt={name}
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />

        {/* Sale Ribbon */}
        {type === "sale" && (
          <span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-xs animate-bounce rounded-full">
            Sale {discount}
          </span>
        )}

        {/* Offer Glow */}
        {type === "offer" && (
          <span className="absolute bottom-2 left-2 bg-secondary text-primary font-semibold px-2 py-1 text-xs rounded-full">
            Offer
          </span>
        )}

        {/* Arrival Badge */}
        {type === "arrival" && (
          <span className="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 text-xs rounded-lg">
            New
          </span>
        )}

        {/* Wishlist Heart Icon */}
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
          name="Add to Wishlist"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Product Info */}
      <h3 className="mt-3 text-lg font-semibold truncate" title={name}>
        {name}
      </h3>

      <div className="flex items-center gap-1 mt-1">{renderStars(rating)}</div>

      <p className="text-black font-medium">₹{price}</p>

      {/* Description with ellipsis + tooltip */}
      <p
        className="text-gray-500 text-sm mt-1 line-clamp-2 overflow-hidden text-ellipsis"
        title={description}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {/* CTA Button */}
      <div className="mt-4 flex gap-2">
        {specialCollections?.some(
          (sc) => sc.toLowerCase() === "on sale"
        ) ? (
          <button className="rounded-sm bg-secondary text-white px-4 py-2 w-full font-semibold transition-all duration-200 hover:opacity-80 hover:scale-105 shadow">
            Book Now
          </button>
        ) : (
          <button className="rounded-sm bg-secondary text-white px-4 py-2 w-full font-semibold transition-all duration-200 hover:opacity-80 hover:scale-105 shadow">
            View Offer
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
