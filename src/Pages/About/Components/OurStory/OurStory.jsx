import { Heart, Target } from "lucide-react";

const OurStory = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
            Making online shopping better, one experience at a time.
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            SHOP.CO was created with a simple idea: shopping online should
            feel effortless. We bring products together in one convenient
            place so customers can discover items that fit their needs
            and preferences.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our focus is on a simple browsing experience, clear product
            information, and helping customers shop with confidence.
            We aim to keep improving as we grow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-blue-50 p-7 transition hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Heart size={25} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-blue-950">
              Our Passion
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Creating a convenient and enjoyable experience for every shopper.
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-50 p-7 transition hover:-translate-y-1 sm:mt-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <Target size={25} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-blue-950">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Making product discovery and online shopping simple for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;