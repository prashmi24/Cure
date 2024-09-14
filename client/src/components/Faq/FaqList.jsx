import React from "react";
import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  if (!faqs || faqs.length === 0) {
    return <p>No FAQs available at the moment.</p>;
  }

  return (
    <section className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </section>
  );
};

export default FaqList;
