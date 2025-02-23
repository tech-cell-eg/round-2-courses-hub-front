import { useState } from "react";

const orderFaq = [
  {
    id: "1",
    question: "Direct Bank Transfer",
    answer:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
  {
    id: "2",
    question: "Cheque Payment",
    answer:
      "Please send your cheque to our store address. Your order will be processed once the cheque is received and cleared.",
  },
  {
    id: "3",
    question: "PayPal",
    answer:
      "Pay securely through PayPal. You can pay with your PayPal balance or a linked debit/credit card.",
  },
];

function OrderFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-6 ">
      <div className="space-y-2">
        {orderFaq.map((item) => (
          <div key={item.id} className="border-b border-gray-200 ">
            <button
              type="button"
              onClick={() => toggleFaq(item.id)}
              className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-700 hover:bg-gray-50"
            >
              {item.question}
              <span className="text-2xl font-bold">{openId === item.id ? "-" : "+"}</span>
            </button>
            {openId === item.id && (
              <div className="px-4 py-2 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderFaq;
