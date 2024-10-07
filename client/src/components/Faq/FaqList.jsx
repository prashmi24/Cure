import React from "react";
import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-600">
          No FAQs available at the moment.
        </p>
        <Link to="/contact" className="text-primaryColor mt-4 inline-block">
          Contact us for more information
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-[38px]" aria-label="Frequently Asked Questions">
      {faqs.map((item) => (
        <FaqItem item={item} key={item.id || item.question} />
      ))}
    </section>
  );
};

export default FaqList;
