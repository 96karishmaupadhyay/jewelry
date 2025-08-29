// import React from 'react'
// import ProductDetailCarousel from '../components/ProductCarousel'
// import Navbar from '../components/Navbar'
// import ProductContentDetail from '../components/ProductContentDetail'
// import Specification from '../components/Specification'
// import Footer from '../sections/Footer'
// import ProductsSlider from '../sections/ProductsSlider'

// import bracelet1 from "../assets/bracelet1.jpeg";
// import bracelet2 from "../assets/bracelet2.jpeg";
// import bracelet4 from "../assets/bracelet4.jpeg";
// import bracelet5 from "../assets/bracelet5.jpeg";

// import necklace4 from "../assets/necklace4.jpeg";
// import necklace5 from "../assets/necklace5.jpeg";
// import necklace16 from "../assets/necklace16.jpeg";
// import necklace17 from "../assets/necklace17.jpeg";

// import earring2 from "../assets/earring2.jpeg";
// import earring3 from "../assets/earring3.jpeg";
// import earring13 from "../assets/earring13.jpeg";
// import earring14 from "../assets/earring14.jpeg";

// import ring1 from "../assets/ring1.jpeg";
// import ring2 from "../assets/ring2.jpeg";
// import ring3 from "../assets/ring7.jpeg";
// import ring4 from "../assets/ring4.jpeg";
// import CustomerReview from '../components/CustomerReview'
// import SendReview from '../components/SendReview'
// import { useSelector } from "react-redux";
// const ProductPage = () => {
//   const products = useSelector((state) => state.products.items);
//   console.log(products)
//     const RecommendedProducts = [
//       { id: 25, name: "Anklet", price: 400, images: [bracelet1, bracelet2], type: "category", rating: 4.2, description: "Graceful anklet designed for everyday charm." },
//       { id: 26, name: "Tiara", price: 1500, images: [necklace16, necklace17], type: "category", rating: 4.8, description: "Royal-inspired tiara perfect for special occasions." },
//       { id: 27, name: "Brooch", price: 600, images: [earring13, earring14], type: "category", rating: 4.3, description: "Elegant brooch to complement formal attire." },
//       { id: 28, name: "Hair Pin", price: 300, images: [earring2, earring3], type: "category", rating: 4.1, description: "Decorative hair pin with subtle sparkle.Buy from us." },
//       { id: 29, name: "Cufflinks", price: 750, images: [ring1, ring2], type: "category", rating: 4.5, description: "Stylish cufflinks that enhance any formal outfit." },
//       { id: 30, name: "Gold Pendant", price: 1200, images: [necklace4, necklace5], type: "category", rating: 4.7, description: "Elegant gold pendant for timeless appeal." },
//       { id: 31, name: "Engagement Ring", price: 2200, images: [ring3, ring4], type: "category", rating: 5.0, description: "Exquisite engagement ring that symbolizes eternal love." },
//       { id: 32, name: "Crystal Bangles", price: 950, images: [bracelet4, bracelet5], type: "category", rating: 4.6, description: "Beautiful crystal bangles with sparkling finish." },
//     ];
    
//   return (
//     <div>
//       <Navbar />
//       {/* Add padding-top equal to Navbar height */}
//       <div className="flex gap-8 px-8 py-6 pt-24">
//         {/* Left Image Carousel */}
//         <div className="sticky top-24 h-fit w-1/2">
//           <ProductDetailCarousel  />
//         </div>

//         {/* Right Content Section */}
//         <div className="flex flex-col gap-4 flex-1 w-1/2">
//           <ProductContentDetail products={products}/>
//           <Specification />
//           <CustomerReview/>
//         </div>
       
//       </div>
//       <div>
//         <SendReview/>
//        </div>
//         <ProductsSlider title="Recommended Products" products={RecommendedProducts} type="category" />
//          <Footer/>
//     </div>
//   )
// }

// export default ProductPage



import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductDetailCarousel from '../components/ProductCarousel'
import Navbar from '../components/Navbar'
import ProductContentDetail from '../components/ProductContentDetail'
import Specification from '../components/Specification'
import Footer from '../sections/Footer'
import ProductsSlider from '../sections/ProductsSlider'
import CustomerReview from '../components/CustomerReview'
import SendReview from '../components/SendReview'

// ✅ images for RecommendedProducts
import bracelet1 from "../assets/bracelet1.jpeg";
import bracelet2 from "../assets/bracelet2.jpeg";
import bracelet4 from "../assets/bracelet4.jpeg";
import bracelet5 from "../assets/bracelet5.jpeg";

import necklace4 from "../assets/necklace4.jpeg";
import necklace5 from "../assets/necklace5.jpeg";
import necklace16 from "../assets/necklace16.jpeg";
import necklace17 from "../assets/necklace17.jpeg";

import earring2 from "../assets/earring2.jpeg";
import earring3 from "../assets/earring3.jpeg";
import earring13 from "../assets/earring13.jpeg";
import earring14 from "../assets/earring14.jpeg";

import ring1 from "../assets/ring1.jpeg";
import ring2 from "../assets/ring2.jpeg";
import ring3 from "../assets/ring7.jpeg";
import ring4 from "../assets/ring4.jpeg";

const ProductPage = () => {
  const { slug } = useParams(); // 👈 get product id from URL
  const products = useSelector((state) => state.products.items);

  // find the product by id
  const product = products.find((p) => String(p.slug) === slug);

  window.onload = function () {
    window.scrollTo(0, 0);
  };
// console.log(product)
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="pt-24 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
        </div>
      </div>
    );
  }

  const RecommendedProducts = [
    { id: 25, name: "Anklet", price: 400, images: [bracelet1, bracelet2], type: "category", rating: 4.2, description: "Graceful anklet designed for everyday charm." },
    { id: 26, name: "Tiara", price: 1500, images: [necklace16, necklace17], type: "category", rating: 4.8, description: "Royal-inspired tiara perfect for special occasions." },
    { id: 27, name: "Brooch", price: 600, images: [earring13, earring14], type: "category", rating: 4.3, description: "Elegant brooch to complement formal attire." },
    { id: 28, name: "Hair Pin", price: 300, images: [earring2, earring3], type: "category", rating: 4.1, description: "Decorative hair pin with subtle sparkle.Buy from us." },
    { id: 29, name: "Cufflinks", price: 750, images: [ring1, ring2], type: "category", rating: 4.5, description: "Stylish cufflinks that enhance any formal outfit." },
    { id: 30, name: "Gold Pendant", price: 1200, images: [necklace4, necklace5], type: "category", rating: 4.7, description: "Elegant gold pendant for timeless appeal." },
    { id: 31, name: "Engagement Ring", price: 2200, images: [ring3, ring4], type: "category", rating: 5.0, description: "Exquisite engagement ring that symbolizes eternal love." },
    { id: 32, name: "Crystal Bangles", price: 950, images: [bracelet4, bracelet5], type: "category", rating: 4.6, description: "Beautiful crystal bangles with sparkling finish." },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex gap-8 px-8 py-6 pt-24">
        {/* Left Image Carousel */}
        <div className="sticky top-24 h-fit w-1/2">
          {/* ✅ pass only this product's images */}
          <ProductDetailCarousel images={product.images} />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col gap-4 flex-1 w-1/2">
          <ProductContentDetail product={product} />
          <Specification product={product}/>
          <CustomerReview />
        </div>
      </div>

      <div>
        <SendReview />
      </div>

      <ProductsSlider
        title="Recommended Products"
        products={products}
        type="category"
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
