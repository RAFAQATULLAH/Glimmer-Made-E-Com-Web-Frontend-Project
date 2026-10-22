import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">
        <div>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-200">
            Welcome to Glimmer Made
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Shopping made
            <span className="block text-indigo-300">simple & exciting.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-blue-100/80 sm:text-lg">
            We believe finding your favorite products should be easy,
            enjoyable, and inspiring. Discover a shopping experience
            designed around you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-950 transition hover:bg-indigo-100"
          >
            Explore Products
            <ArrowRight size={19} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-indigo-400/20 text-indigo-200">
              <ShoppingBag size={56} strokeWidth={1.5} />
            </div>

            <h2 className="mt-8 text-3xl font-bold">
              More than shopping.
            </h2>

            <p className="mt-4 leading-7 text-blue-100/75">
              A place to discover products you'll love and enjoy a smoother
              online shopping journey.
            </p>

            <div className="mt-8 h-1.5 w-24 rounded-full bg-indigo-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;