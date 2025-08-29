// import React from 'react'
// import Navbar from '../components/Navbar'
// import BannerVideo from '../components/BannerVideo'
// import CategorySection from '../sections/categorySection'
// import ProductsSlider from '../sections/ProductsSlider'
// import Collection1 from '../sections/Collection1'
// import ProductAutoSlider from '../sections/ProductAutoSlider.jsx'
// import BannerGrid from '../components/BannerGrid.jsx'
// import RatingAndTrust from '../components/RatingAndTrust.jsx'
// import HappyCustomer from '../sections/HappyCustomer.jsx'
// import FAQ from '../sections/FAQ.jsx'
// import BannerGrid2 from '../components/BannerGrid2.jsx'
// import Footer from '../sections/Footer.jsx'
// import necklace1 from '../assets/necklace1.jpeg'
// import necklace2 from '../assets/necklace2.jpeg'
// import necklace3 from '../assets/necklace3.jpeg'
// import necklace4 from '../assets/necklace4.jpeg'
// import necklace5 from '../assets/necklace5.jpeg'
// import necklace6 from '../assets/necklace6.jpeg'

// import necklace8 from '../assets/necklace8.jpeg'
// import necklace9 from '../assets/necklace9.jpeg'
// import necklace10 from '../assets/necklace10.jpeg'
// import necklace11 from '../assets/necklace11.jpeg'
// import necklace12 from '../assets/necklace12.jpeg'
// import necklace13 from '../assets/necklace13.jpeg'
// import necklace14 from '../assets/necklace14.jpeg'
// import necklace15 from '../assets/necklace15.jpeg'
// import necklace16 from '../assets/necklace16.jpeg'
// import necklace17 from '../assets/necklace17.jpeg'
// import ring1 from '../assets/ring1.jpeg'
// import ring2 from '../assets/ring2.jpeg'
// import ring3 from '../assets/ring7.jpeg'
// import ring4 from '../assets/ring4.jpeg'
// import ring5 from '../assets/ring5.jpeg'
// import ring6 from '../assets/ring6.jpeg'
// import ring7 from '../assets/ring7.jpeg'
// import ring8 from '../assets/ring8.jpeg'
// import ring9 from '../assets/ring9.jpeg'
// import ring10 from '../assets/ring10.jpeg'
// import earring1 from '../assets/earring1.jpeg'
// import earring2 from '../assets/earring2.jpeg'
// import earring3 from '../assets/earring3.jpeg'
// import earring4 from '../assets/earring4.jpeg'
// import earring5 from '../assets/earring5.jpeg'
// import earring6 from '../assets/earring6.jpeg'
// import earring7 from '../assets/earring7.jpeg'
// import earring8 from '../assets/earring8.jpeg'
// import earring9 from '../assets/earring9.jpeg'
// import earring10 from '../assets/earring10.jpeg'
// import earring11 from '../assets/earring11.jpeg'
// import earring12 from '../assets/earring12.jpeg'
// import earring13 from '../assets/earring13.jpeg'
// import earring14 from '../assets/earring14.jpeg'
// import bracelet1 from '../assets/bracelet1.jpeg'
// import bracelet2 from '../assets/bracelet2.jpeg'
// import bracelet3 from '../assets/bracelet3.jpeg'
// import bracelet4 from '../assets/bracelet4.jpeg'
// import bracelet5 from '../assets/bracelet5.jpeg'
// import bracelet6 from '../assets/bracelet1.jpeg'
// import bracelet7 from '../assets/bracelet7.jpeg'
// import BannerCarousel from '../components/CarouseBanner.jsx'


// const Home = () => {

// // ✅ Arrival Products
// const arrivalProducts = [
//   { id: 1, name: "Diamond Ring", price: 1200, images: [ring1, ring2], type: "arrival", rating: 4.9, description: "Elegant diamond ring crafted with precision for timeless beauty." },
//   { id: 2, name: "Gold Chain", price: 800, images: [necklace1, necklace2], type: "arrival", rating: 4.7, description: "Classic 22k gold chain perfect for daily wear and gifting." },
//   { id: 3, name: "Emerald Pendant", price: 1500, images: [necklace3, necklace4], type: "arrival", rating: 4.8, description: "Stunning emerald pendant set in fine gold for a royal look." },
//   { id: 4, name: "Platinum Band", price: 2000, images: [ring3, ring4], type: "arrival", rating: 4.9, description: "Minimalistic platinum band symbolizing strength and eternity." },
//   { id: 5, name: "Rose Gold Earrings", price: 1100, images: [earring1, earring2], type: "arrival", rating: 4.6, description: "Chic rose gold earrings with a modern yet elegant design." },
//   { id: 6, name: "Sapphire Ring", price: 1800, images: [ring5, ring6], type: "arrival", rating: 4.8, description: "A luxurious sapphire centerpiece with dazzling brilliance." },
//   { id: 7, name: "Diamond Studs", price: 950, images: [earring3, earring4], type: "arrival", rating: 4.7, description: "Classic diamond stud earrings — simple, elegant, and timeless." },
//   { id: 8, name: "Crystal Necklace", price: 1300, images: [necklace5, necklace6], type: "arrival", rating: 4.5, description: "Sparkling crystal necklace that adds charm to every outfit." },
// ];

// // ✅ Sale Products
// const saleProducts = [
//   { id: 9, name: "Silver Bracelet", price: 500, images: [bracelet1, bracelet2], type: "sale", rating: 4.3, description: "Stylish silver bracelet with intricate detailing." },
//   { id: 10, name: "Pearl Necklace", price: 900, images: [necklace6, necklace8], type: "sale", rating: 4.6, description: "Elegant pearl necklace for classic sophistication." },
//   { id: 11, name: "Gold Earrings", price: 700, images: [earring5, earring6], type: "sale", rating: 4.5, description: "Delicate gold earrings perfect for everyday wear." },
//   { id: 12, name: "Cubic Zirconia Ring", price: 450, images: [ring7, ring8], type: "sale", rating: 4.2, description: "Affordable cubic zirconia ring with sparkling brilliance." },
//   { id: 13, name: "Charm Bracelet", price: 600, images: [bracelet3, bracelet4], type: "sale", rating: 4.4, description: "Trendy charm bracelet with customizable trinkets." },
//   { id: 14, name: "Beaded Anklet", price: 350, images: [bracelet5, bracelet6], type: "sale", rating: 4.1, description: "Colorful beaded anklet for a bohemian style." },
//   { id: 15, name: "Stud Earrings", price: 400, images: [earring7, earring8], type: "sale", rating: 4.3, description: "Minimal stud earrings that suit all occasions." },
//   { id: 16, name: "Gold Bangle", price: 1000, images: [bracelet7, necklace9], type: "sale", rating: 4.6, description: "Elegant gold bangle with a traditional touch." },
// ];

// // ✅ Offer Products
// const offerProducts = [
//   { id: 17, name: "Earrings", price: 700, images: [earring9, earring10], type: "offer", rating: 4.4, description: "Stylish earrings available at a special offer price." },
//   { id: 18, name: "Bangles", price: 600, images: [bracelet2, bracelet3], type: "offer", rating: 4.3, description: "Traditional bangles with a modern twist." },
//   { id: 19, name: "Nose Pin", price: 250, images: [earring11, earring12], type: "offer", rating: 4.2, description: "Delicate nose pin for an elegant look. Try it!" },
//   { id: 20, name: "Ruby Pendant", price: 1400, images: [necklace10, necklace11], type: "offer", rating: 4.7, description: "Gorgeous ruby pendant that radiates sophistication." },
//   { id: 21, name: "Charm Necklace", price: 850, images: [necklace12, necklace13], type: "offer", rating: 4.5, description: "Trendy charm necklace with customizable designs." },
//   { id: 22, name: "Toe Ring", price: 200, images: [ring9, ring10], type: "offer", rating: 4.0, description: "Simple silver toe ring for daily wear." },
//   { id: 23, name: "Gold Chain (Offer)", price: 700, images: [necklace14, necklace15], type: "offer", rating: 4.4, description: "Beautiful gold chain at an exclusive offer price." },
//   { id: 24, name: "Silver Anklet", price: 500, images: [bracelet6, bracelet7], type: "offer", rating: 4.3, description: "Elegant silver anklet with fine craftsmanship." },
// ];

// // ✅ Category Products
// const categoryProducts = [
//   { id: 25, name: "Anklet", price: 400, images: [bracelet1, bracelet2], type: "category", rating: 4.2, description: "Graceful anklet designed for everyday charm." },
//   { id: 26, name: "Tiara", price: 1500, images: [necklace16, necklace17], type: "category", rating: 4.8, description: "Royal-inspired tiara perfect for special occasions." },
//   { id: 27, name: "Brooch", price: 600, images: [earring13, earring14], type: "category", rating: 4.3, description: "Elegant brooch to complement formal attire." },
//   { id: 28, name: "Hair Pin", price: 300, images: [earring2, earring3], type: "category", rating: 4.1, description: "Decorative hair pin with subtle sparkle.Buy from us ." },
//   { id: 29, name: "Cufflinks", price: 750, images: [ring1, ring2], type: "category", rating: 4.5, description: "Stylish cufflinks that enhance any formal outfit." },
//   { id: 30, name: "Gold Pendant", price: 1200, images: [necklace4, necklace5], type: "category", rating: 4.7, description: "Elegant gold pendant for timeless appeal." },
//   { id: 31, name: "Engagement Ring", price: 2200, images: [ring3, ring4], type: "category", rating: 5.0, description: "Exquisite engagement ring that symbolizes eternal love." },
//   { id: 32, name: "Crystal Bangles", price: 950, images: [bracelet4, bracelet5], type: "category", rating: 4.6, description: "Beautiful crystal bangles with sparkling finish." },
// ];


//   return (
//     <div className=''>
//       <Navbar />
//       <BannerVideo />
//       <CategorySection />
//       <ProductAutoSlider title="New Arrival" products={arrivalProducts} type="arrival" />
//       <Collection1/>
//       {/* <ProductsSlider title="Offer Zone" products={offerProducts} type="offer" /> */}
//       <BannerGrid/>
//       <ProductsSlider title="Sale Items" products={saleProducts} type="sale" />
//       {/* <RatingAndTrust/> */}
//       <BannerCarousel/>
//       <ProductsSlider title="Category Collection" products={categoryProducts} type="category" />
//       <HappyCustomer/>
//       <BannerGrid2/>
//       <FAQ/>
//       <Footer/>
     
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import BannerVideo from "../components/BannerVideo";
import CategorySection from "../sections/categorySection";
import ProductsSlider from "../sections/ProductsSlider";
import Collection1 from "../sections/Collection1";
import ProductAutoSlider from "../sections/ProductAutoSlider.jsx";
import BannerGrid from "../components/BannerGrid.jsx";
import HappyCustomer from "../sections/HappyCustomer.jsx";
import FAQ from "../sections/FAQ.jsx";
import BannerGrid2 from "../components/BannerGrid2.jsx";
import Footer from "../sections/Footer.jsx";
import BannerCarousel from "../components/CarouseBanner.jsx";

const Home = () => {
  const products = useSelector((state) => state.products.items);

  // ✅ Use correct key `specialCollections`
  const arrivalProducts = products.filter(
    (p) => p.specialCollections && p.specialCollections.includes("New Arrivals")
  );

  const saleProducts = products.filter(
    (p) => p.specialCollections && p.specialCollections.includes("On Sale")
  );

  const offerProducts = products.filter(
    (p) => p.specialCollections && p.specialCollections.includes("Special Offers")
  );

  const categoryProducts = products.filter(
    (p) => p.subCategory === "Rings" // adjust based on your need
  );

  return (
    <div>
      <Navbar />
      <BannerVideo />
      <CategorySection />

      <ProductAutoSlider title="New Arrival" products={arrivalProducts} />
      
      <ProductsSlider title="Sale Items" products={saleProducts}  />
      <BannerGrid/>
      <ProductsSlider title="Offer Zone" products={offerProducts}  />
      
      <ProductsSlider title="Category Collection" products={categoryProducts}  />

      <HappyCustomer />
      <BannerGrid2 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
