import { useState } from "react";
import SingleFaq from "./SingleFaq";

const faqDetails = [
  {
    id: "faq1",
    question: "What is this website about?",
    answer: "This website provides information about our products and services."
  },
  {
    id: "faq2",
    question: "How can I contact support?",
    answer: "You can contact support via email or our contact form on the website."
  },
  {
    id: "faq3",
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds within 30 days of purchase. Terms and conditions apply."
  },
  {
    id: "faq4",
    question: "Is there a mobile version available?",
    answer: "Yes, our website is mobile-friendly and works on all devices."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full mx-auto p-4">
      <ul className="space-y-3">
        {faqDetails.map((faq) => (
          <SingleFaq
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => toggleFaq(faq.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
