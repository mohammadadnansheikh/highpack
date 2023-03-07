import  FAQARRAY  from "../components/FAQ-data";
const frequentlyaskedques = () => {
  return (
    <div className="mt-[4.5rem] sm:mt-[4.7rem] md:mt-[5rem] p-[2rem]">
      <h1 className="mt-[1rem] text-[1.2rem] sm:text-[1.7rem] md:text-[2rem] text-gray-900 font-bold">
        Frequently Asked Question
      </h1>
      <div className="text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] text-teal-500">
        {FAQARRAY &&
          FAQARRAY.map((faq, i=0) => {
            return (
              <div key={i++} className="my-[1rem] bg-gray-100 px-[.5rem] py-[.6rem] hover:bg-gray-200 rounded-md">
                <div className="font-semibold"><span className="text-teal-900">Ques {i+1}. </span>{faq.question}</div>
                <div><span className="font-semibold text-teal-900">Answer. </span>{faq.answer}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default frequentlyaskedques;
