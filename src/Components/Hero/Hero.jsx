
import { Link } from "react-router-dom";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

const Hero = ({
  title = "Shop smarter. Live better.",
  text = "Quality products from brands you trust, delivered fast and priced fairly.",
  image, // large image for the main tile (transparent PNG works best)
  newImage, // image for the "New arrivals" tile
  saleImage, // image for the "Sale" tile
  saleTitle = "Up to 40% off",
  saleText = "Selected items, this week only.",
}) => {
  return (
    <section className="mt-6 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
      {/* Main tile */}
      <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-8 text-white sm:p-12 lg:col-span-2 lg:row-span-2 lg:p-16">
        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full border border-sky-300/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-sky-300/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-sky-400"
        />

        {image && (
          <img
            src={image}
            alt=""
            className="pointer-events-none absolute bottom-0 right-4 hidden h-4/5 w-auto object-contain sm:block lg:right-10"
          />
        )}

        <div className="relative flex h-full min-h-[22rem] max-w-lg flex-col justify-center lg:min-h-[28rem]">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-blue-100">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/products/"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Shop now
            </Link>
            <Link
              to="/about/"
              className="rounded-full border border-blue-300/40 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* New arrivals tile */}
      <Link
        to="/products/"
        className="group relative flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-3xl bg-sky-400 p-7 text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">New arrivals</h2>
          <p className="mt-1 text-sm text-blue-950/70">Fresh in this week.</p>
        </div>
        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white transition-transform group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </span>
        {newImage ? (
          <img
            src={newImage}
            alt=""
            className="absolute bottom-0 right-0 h-4/5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ShoppingBag
            aria-hidden="true"
            size={120}
            strokeWidth={1}
            className="absolute -bottom-3 -right-3 text-blue-950/20"
          />
        )}
      </Link>

      {/* Sale tile */}
      <Link
        to="/products/"
        className="group relative flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">{saleTitle}</h2>
          <p className="mt-1 text-sm text-blue-900/70">{saleText}</p>
        </div>
        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white transition-transform group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </span>
        {saleImage ? (
          <img
            src={saleImage}
            alt=""
            className="absolute bottom-0 right-0 h-4/5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-50"
          />
        )}
      </Link>
    </section>
  );
};

export default Hero;