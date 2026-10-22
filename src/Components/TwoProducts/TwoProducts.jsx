
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';

const TwoProducts = ({heading}) => {
    const [data,setData]=useState([])
    const [showAll,setShowAll]=useState(false)
    useEffect(()=>{
         fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error)=>{console.error("error fatching Products",error)});
    },[]);
    const visibleProducts=showAll? data : data.slice(0,2)

  return (
    <div className='flex justify-center items-center gap-6 flex-col w-[48%] pt-15'>
        <h2 className='text-5xl font-bold  text-blue-950 pb-7'>{heading}</h2>
        <div className='flex justify-between items-center flex-wrap gap-8'>
             {
            visibleProducts.map(p=>{
              return  <ProductCard key={p.id} product={p} />
            })
        }
        </div>
       
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full bg-blue-950 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
    </div>
  )
}

export default TwoProducts;
