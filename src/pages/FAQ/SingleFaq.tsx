import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const SingleFaq = ({ question, answer, isOpen, onClick }: FaqProps) => {
  return (
    <div
      className={` rounded-lg border border-gray-300 `}
    >
        <button
            className={`flex justify-between w-full py-2 px-2 text-lg font-semibold 
             border border-transparent outline-none 
             transition-none hover:transition-none min-h-[48px]
            ${
            isOpen ? "bg-indigo-500 text-white" : "bg-white"
            }`}
            onClick={onClick}
        >
            {question}
  {isOpen ? <FaMinus /> : <FaPlus />}
</button>

          {isOpen && <div className="flex gap-2 p-3">
             <p className={"mt-2 text-gray-600"}>{answer}</p>     
            <img src="/faq.png" alt="faq image" className="hidden sm:block" />
          </div>
}
      
    </div>
  );
};

export default SingleFaq;
