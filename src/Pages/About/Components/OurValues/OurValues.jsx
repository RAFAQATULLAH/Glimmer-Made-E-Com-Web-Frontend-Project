import {
  ShieldCheck,
  Sparkles,
  Users,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Quality First",
    description:
      "We aim to offer products selected with care and useful product details.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We want every customer to feel supported throughout their shopping journey.",
  },
  {
    icon: ShieldCheck,
    title: "Shopping Confidence",
    description:
      "Clear information and transparent policies help customers make informed choices.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Improvement",
    description:
      "We keep looking for ways to make our store and service better.",
  },
];

const OurValues = () => {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            What Matters to Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
            The values behind our store
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Everything we do starts with making shopping a better experience
            for our customers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-blue-950">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;