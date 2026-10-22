import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const questions = [
  {
    question: "How can I track my order?",
    answer:
      "Once order tracking is available, you can use the tracking link or information provided with your order confirmation.",
  },
  {
    question: "How do I ask about a product?",
    answer:
      "Send us a message using the contact form above and include the product name so we can understand your question.",
  },
  {
    question: "What if I want to return an item?",
    answer:
      "Please review your store's return policy for eligibility and instructions, then contact support if you need further help.",
  },
  {
    question: "How can I get help with an order?",
    answer:
      "Contact the support team using your registered email and include your order number, if you have one.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-600">
            Quick answers to common shopping questions.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-blue-950 transition hover:bg-indigo-50 sm:p-6"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <Minus size={20} className="shrink-0 text-indigo-600" />
                  ) : (
                    <Plus size={20} className="shrink-0 text-indigo-600" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;