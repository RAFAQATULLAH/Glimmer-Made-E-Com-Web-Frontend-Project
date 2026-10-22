import { useSelector } from 'react-redux'
import ProductCard from '../../ProductCard/ProductCard'
import { useState } from 'react'

const MianComponenet = () => {
  const { data, loading, error } = useSelector(
    (state) => state.products
  )

  const [category, setCategory] = useState('All Products')

  const categories = [
    'All Products',
    "Men's Clothing",
    "Women's Clothing",
    'Jewelry',
    'Electronics',
  ]

  const filteredProducts =
    category === 'All Products'
      ? data
      : data.filter((product) => {
          const selectedCategory = {
            "Men's Clothing": "men's clothing",
            "Women's Clothing": "women's clothing",
            Jewelry: 'jewelery',
            Electronics: 'electronics',
          }

          return product.category === selectedCategory[category]
        })

  return (
    <div className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
      {/* Sidebar */}
      <aside className="w-full shrink-0 md:w-56 lg:w-64">
        <div className="md:sticky md:top-6">
          <div className="w-full rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Categories
            </h2>

            <div className="flex flex-col gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-lg px-4 py-3 text-left font-medium transition ${
                    category === item
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Products */}
      <main className="min-w-0 flex-1">
        <h2 className="mb-6 text-2xl font-bold">
          {category}
        </h2>

        {loading && <p>Loading products...</p>}

        {error && (
          <p className="text-red-500">
            Error: {String(error)}
          </p>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products found.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default MianComponenet
