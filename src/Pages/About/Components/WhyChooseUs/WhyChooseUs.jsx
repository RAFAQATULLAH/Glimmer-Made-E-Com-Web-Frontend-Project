import {
  Search,
  Smartphone,
  Headset,
} from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Easy Product Discovery",
    description:
      "Browse our product collection and find items that match your needs.",
  },
  {
    icon: Smartphone,
    title: "Responsive Shopping",
    description:
      "Enjoy a clean, easy-to-use store on your phone, tablet, or computer.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "We aim to make it easy to get help when you have questions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Why SHOP.CO?
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
              Your shopping experience comes first.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We want shopping online to be straightforward, from finding
              the right product to reviewing your cart. Our store is designed
              to help you spend less time searching and more time discovering.
            </p>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-5 rounded-2xl border border-gray-100 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-blue-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;