
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import Nav from '../../Components/Navbar/Nav'
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/CartSlice/CartSlice'

const ProductDetails = () => {
  const { id } = useParams()

  const { data, loading, error } = useSelector(
    (state) => state.products
  )

  const product = data.find(
    (item) => item.id === Number(id)
  )
const dispatch = useDispatch()
  if (loading && data.length === 0) {
    return (
      <>
        <Nav />
        <div className="flex min-h-96 items-center justify-center">
          <p className="animate-pulse text-lg font-semibold text-blue-950">
            Loading product details...
          </p>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Nav />
        <p className="p-10 text-center text-red-500">
          {String(error)}
        </p>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Nav />
        <div className="px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-blue-950">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-blue-950">
      <Nav />

      <main className="mx-auto w-[95%] max-w-7xl py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition hover:text-indigo-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="transition hover:text-indigo-600">
            Products
          </Link>
          <span>/</span>
          <span className="max-w-48 truncate capitalize text-blue-950">
            {product.category}
          </span>
        </div>

        {/* Product Details */}
        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-blue-100 bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2 md:gap-12 md:p-10">
          {/* Product Image */}
          <div className="flex min-h-80 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 sm:p-12">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 w-full object-contain transition-transform duration-500 hover:scale-105 sm:h-96"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center py-2">
            <span className="mb-4 w-fit rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              {product.category}
            </span>

            <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-indigo-600">
                ${Number(product.price).toFixed(2)}
              </span>

              {product.rating && (
                <span className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                  ⭐ {product.rating.rate} / 5
                  <span className="ml-1 font-normal text-gray-500">
                    ({product.rating.count} reviews)
                  </span>
                </span>
              )}
            </div>

            <div className="my-7 h-px bg-blue-100" />

            <h2 className="mb-3 text-lg font-bold">
              Product Description
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3">
                <Truck size={22} className="shrink-0 text-indigo-600" />
                <span className="text-xs font-medium sm:text-sm">
                  Delivery information
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3">
                <ShieldCheck size={22} className="shrink-0 text-indigo-600" />
                <span className="text-xs font-medium sm:text-sm">
                  Secure shopping
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3">
                <RotateCcw size={22} className="shrink-0 text-indigo-600" />
                <span className="text-xs font-medium sm:text-sm">
                  Return information
                </span>
              </div>
            </div>

            <button
  onClick={() => dispatch(addToCart(product))}
  className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-950 px-6 py-4 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
>
  <ShoppingCart size={20} />
  Add to Cart
</button>

            <Link
              to="/products"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-12 overflow-hidden rounded-3xl bg-white sm:mt-16">
          <ProductsContainer heading="You May Also Like" />
        </section>
      </main>

 
    </div>
  )
}

export default ProductDetails
