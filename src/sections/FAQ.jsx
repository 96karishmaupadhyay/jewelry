// FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import image from "../assets/necklace5.jpeg"
const faqs = [
  {
    id: 1,
    question: "What materials are used in your jewelry?",
    answer:
      "We use high-quality metals such as gold, silver, platinum, and genuine gemstones. Each piece is crafted to perfection.",
  },
  {
    id: 2,
    question: "Do you offer customization?",
    answer:
      "Yes! We offer custom designs. You can share your idea and we will create a unique piece tailored just for you.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer:
      "We offer a 14-day return policy for unworn items with original packaging. Personalized/custom items are non-refundable.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email or SMS to track your delivery.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className=" text-white py-16 px-6 md:px-16">
          <div className="absolute inset-0 bg-primary opacity-4 -z-10 "></div>
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Frequently Asked Questions
      </h2>
<div className="flex gap-4 pt-4">
      <div className="flex-1 mx-auto space-y-4 flex flex-col justify-between">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white text-secondary rounded-sm shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {faq.question}
              {openId === faq.id ? (
                <ChevronUp className="text-primary" size={20} />
              ) : (
                <ChevronDown className="text-primary" size={20} />
              )}
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-sm">
        <img src={image} alt="" className="w-full h-[350px] object-cover rounded-2xl " />
      </div>
      </div>
    </section>
  );
};

export default FAQ;
