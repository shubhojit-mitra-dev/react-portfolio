import React, { useState } from 'react';

const AboutMeAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const aboutMeFAQ = [
    {
      question: "What are you currently studying?",
      answer: "🎓 I'm a Second year student at UPES, Dehradun, pursuing my BTech in Computer Science Specialization in Full Stack Development!"
    },
    {
      question: "Are you open to collaborating on projects?",
      answer: "🤝 Absolutely! I love working with others and making new connections, especially with fellow developers and tech enthusiasts 👨‍💻"
    },
    {
      question: "What are you learning right now?",
      answer: "🌱 I'm diving deep into NextJS to level up my frontend skills and explore more of the web development world."
    },
    {
      question: "What can people reach out to you for?",
      answer: "💬 Feel free to ask me anything about frontend development or even some advanced Python topics — I'm always happy to help! 😁"
    },
    {
      question: "Fun fact about you?",
      answer: "☕ I can't code without coffee; it's basically fuel for my creativity!"
    }
  ];
  

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        {aboutMeFAQ.map((item, index) => (
          <div key={index} className="">
            <button
              className="w-full text-left px-4 py-5 flex justify-between items-center text-white hover:bg-[rgba(59,130,246,0.5)] focus:outline-none hover:rounded-lg hover:shadow-lg"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-4 py-3 text-gray-300 text-left">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeAccordion;