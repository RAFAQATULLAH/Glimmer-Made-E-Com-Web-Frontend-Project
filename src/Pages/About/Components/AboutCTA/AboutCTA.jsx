import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 to-blue-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to discover something you love?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Explore our collection and find your next favorite product.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
        >
          Start Shopping
          <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;