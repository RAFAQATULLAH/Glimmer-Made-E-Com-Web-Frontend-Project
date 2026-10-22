
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice/CartSlice";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, title, price, description, category, image } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <article className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-blue-50">
        <Link to={`/products/${id}`} aria-label={`View ${title}`}>
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-110 sm:p-7 md:p-8"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-blue-300">
              No image
            </div>
          )}
        </Link>

        <span className="absolute left-2 top-2 max-w-[65%] truncate rounded-full bg-white px-2 py-1 text-[10px] font-medium capitalize text-blue-900 shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
          {category}
        </span>

        <button
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="absolute right-2 top-2 rounded-full bg-white p-2 text-blue-950 shadow-sm transition-transform hover:scale-110 sm:right-3 sm:top-3"
        >
          <Heart
            size={18}
            className={liked ? "fill-red-500 text-red-500" : ""}
          />
        </button>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5">
        <Link to={`/products/${id}`}>
          <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-blue-950 transition-colors hover:text-blue-700 sm:text-base">
            {title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-blue-900/60 sm:text-sm">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4 sm:pt-5">
          <span className="text-lg font-bold tracking-tight text-blue-950 sm:text-xl md:text-2xl">
            ${Number(price).toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            aria-label={`Add ${title} to cart`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white transition-all hover:scale-105 hover:bg-sky-500 hover:text-blue-950 sm:h-11 sm:w-11"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
