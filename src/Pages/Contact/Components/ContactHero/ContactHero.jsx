import { ArrowDown, MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 px-6 py-20 text-white sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-indigo-200">
          <MessageCircle size={32} />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
          We're Here to Help
        </p>

        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Let's talk.
          <span className="block text-indigo-300">We're listening.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
          Have a question about a product, your order, or our store?
          Send us a message and let us know how we can help.
        </p>

        <a
          href="#contact-form"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-950 transition hover:bg-indigo-100"
        >
          Get in Touch
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};

export default ContactHero;