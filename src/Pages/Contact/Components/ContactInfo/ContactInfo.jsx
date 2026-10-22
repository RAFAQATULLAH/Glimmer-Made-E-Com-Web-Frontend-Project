import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@example.com",
    description: "Send us your questions anytime.",
    href: "mailto:support@example.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+92 300 1234567",
    description: "Speak with our support team.",
    href: "tel:+923001234567",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Your City, Pakistan",
    description: "Update this with your business location.",
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "Monday – Saturday",
    description: "Add your actual support hours here.",
  },
];

const ContactInfo = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Contact Information
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            We'd love to hear from you
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-bold text-blue-950">
                  {item.title}
                </h3>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block break-words text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="mt-2 break-words text-sm font-semibold text-indigo-600">
                    {item.detail}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;