import React from "react";
import "./Faqs.css";

const details = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of courses in various fields, including technology, business, and healthcare.",
  },
  {
    question: "What are the eligibility criteria for admission?",
    answer:
      "Admission criteria vary by course, typically requiring relevant academic qualifications or work experience.",
  },
  {
    question: "Is financial aid or scholarship available? ",
    answer:
      "Yes, we offer financial aid and scholarships to eligible students. Please check our scholarship page for more details.",
  },
  {
    question: "Can I take courses online or is attendance mandatory?",
    answer:
      "We offer both online and in-person courses, providing flexibility to fit different learning preferences.",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "Course durations vary from short-term certifications to longer diploma or degree programs, typically ranging from a few weeks to several months.",
  },
  {
    question: "Are there any placement or internship opportunities?",
    answer:
      "Yes, we have a dedicated placement cell and offer internship opportunities with industry partners.",
  },
  {
    question: "How do I apply for a course?",
    answer:
      "You can apply online through our website by filling out the application form and submitting the required documents.",
  },
  {
    question: "Do you offer part-time or weekend courses?",
    answer:
      "Yes, we offer part-time and weekend courses for working professionals or those with busy schedules.",
  },
  {
    question: "What is the refund policy if I withdraw from a course?",
    answer:
      "Our refund policy depends on the timing of withdrawal. Please refer to our terms and conditions for specific details.",
  },
  {
    question: "What facilities are available at the institute?",
    answer:
      "Our campus is equipped with state-of-the-art labs, libraries, and recreational facilities to enhance your learning experience.",
  },
];

const Faqs = () => {
  return (
    <div className="container py-4 faqs">
      <h1 className="fs-1 fw-bold py-2 my-3">
        Get your every single answer here
      </h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {details.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`flush-heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse-${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`flush-collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading-${index}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
