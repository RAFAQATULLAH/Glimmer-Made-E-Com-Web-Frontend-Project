import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Front-end demo only. Connect an API to actually send the message.
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact-form" className="bg-gray-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Send Us a Message
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
            Have something on your mind?
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-gray-600">
            Whether you need help with an order, want product information,
            or simply have feedback, fill out the form. We'd be happy to hear
            from you.
          </p>

          <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-white sm:p-8">
            <p className="text-lg font-semibold">A little message goes a long way.</p>
            <p className="mt-3 text-sm leading-7 text-blue-100/70">
              Please include your order number when contacting us about an
              existing order, so your request can be handled more easily.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
        >
          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800"
            >
              <CheckCircle2 size={21} className="shrink-0" />
              <p>
                Demo submitted successfully! No message has been sent yet.
                Connect a backend to receive customer messages.
              </p>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-blue-950">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-blue-950">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-blue-950">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-blue-950">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
          >
            Send Message
            <Send size={18} />
          </button>

          <p className="mt-4 text-xs leading-5 text-gray-500">
            By submitting this form, you agree to be contacted about your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;