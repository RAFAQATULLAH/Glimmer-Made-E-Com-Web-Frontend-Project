
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../Redux/CartSlice/CartSlice'
import { ShoppingBag, Trash2, ArrowLeft, ShieldCheck } from 'lucide-react'
import Nav from '../../Components/Navbar/Nav'


const Cart = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state) => state.cart)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-slate-50 text-blue-950">
      <Nav />

      <main className="mx-auto w-[95%] max-w-7xl py-8 sm:py-12">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Your Shopping Bag
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-3xl border border-blue-100 bg-white px-5 py-16 text-center shadow-sm sm:py-20">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
              <ShoppingBag size={36} className="text-indigo-600" />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-gray-500">
              Looks like you haven't added anything to your cart yet.
              Explore our collection and find something you love.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-950 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              <ShoppingBag size={18} />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <section className="space-y-5 lg:col-span-2">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:p-6"
                >
                  {/* Image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="flex h-40 shrink-0 items-center justify-center rounded-xl bg-blue-50 p-4 sm:h-36 sm:w-36"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {item.category}
                    </p>

                    <Link
                      to={`/products/${item.id}`}
                      className="line-clamp-2 text-base font-bold leading-6 transition hover:text-indigo-600 sm:text-lg"
                    >
                      {item.title}
                    </Link>

                    <p className="mt-3 text-xl font-bold text-blue-950">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      <Trash2 size={16} />
                      Remove item
                    </button>
                  </div>

                  {/* Quantity and Subtotal */}
                  <div className="flex items-center justify-between gap-4 border-t border-blue-50 pt-4 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                    <div className="flex items-center gap-4 rounded-full border border-blue-100 px-3 py-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                        className="font-bold text-blue-950 transition hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="min-w-5 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label="Increase quantity"
                        className="font-bold text-blue-950 transition hover:text-indigo-600"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        Subtotal
                      </p>
                      <p className="mt-1 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

              <Link
                to="/products"
                className="inline-flex items-center gap-2 py-3 font-semibold text-indigo-700 transition hover:text-blue-950"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>
            </section>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-6">
              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-blue-100 pb-5">
                <div className="flex justify-between gap-3 text-gray-600">
                  <span>Items ({totalItems})</span>
                  <span className="font-medium text-blue-950">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-indigo-600">
                    Calculated at checkout
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-3 py-5 text-lg font-bold">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => alert('Checkout functionality coming soon!')}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-4 font-semibold text-white shadow-md transition hover:bg-indigo-700"
              >
                Proceed to Checkout
                <ArrowLeft className="rotate-180" size={18} />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck size={17} className="text-indigo-600" />
                Secure shopping experience
              </div>
            </aside>
          </div>
        )}
      </main>

  
    </div>
  )
}

export default Cart
