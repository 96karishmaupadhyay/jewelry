import React from 'react'
import Navbar from '../components/Navbar'
import FilterSection from '../sections/FilterSection'
import { useSelector } from "react-redux";
import FilteredProductsSections from '../sections/FilteredProductsSections';
const Filter = () => {
  const products = useSelector((state) => state.products.items);
  // console.log(products)
  return (
    <div>
      <Navbar/>
   <div className="flex ">
  {/* Sidebar (Filter) */}
 
    <FilterSection products={products}/>


  
    <FilteredProductsSections products={products} />
  
</div>

    </div>
  )
}

export default Filter
