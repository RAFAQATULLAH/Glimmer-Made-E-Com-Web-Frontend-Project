
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {useSelector } from 'react-redux'


const ProductsContainer = ({ heading }) => {


  const { data } = useSelector(
    (state) => state.products
  )


  const [showAll, setShowAll] = useState(false)

  const visibleProducts = showAll ? data : data.slice(0, 4)

  return (
    <section className="flex w-full flex-col items-center px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-16">

      <h2 className="mb-7 text-center text-3xl font-bold text-blue-950 sm:text-4xl md:mb-10 md:text-5xl">
        {heading}
      </h2>

      <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {data.length > 4 && (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full bg-blue-950 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:px-8 sm:text-base"
          >
            {showAll ? 'See less' : 'See more'}
          </button>
        </div>
      )}

    </section>
  )
}

export default ProductsContainer
