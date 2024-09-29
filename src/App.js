import "./App.css";
import CourcesSlider from "./components/Courses/CourcesSlider";
import Header from "./components/Header";
import TopSlider from "./components/top-slider/TopSlider";
import Image from "./components/Courses/full-stack.jpg";
import Image1 from "./components/Courses/devopes.jpg";
import Image2 from "./components/Courses/aws.png";
import Image3 from "./components/Courses/cyber-security.avif";
import Image4 from "./components/Courses/data-analyst.jpg";
import Image5 from "./components/Courses/data-science.avif";
import Features from "./components/features/Features";
import Contact from "./components/Contact/Contact";
import Faqs from "./components/Faqs/Faqs";
import CardSlider from "./components/ClientSays/ClientCarousel";
import Register from "./components/Register/Register";
import RecruitSlider from "./components/Recruitments/RecruitSlider";
import Footer from "./components/Footer/Footer";

function App() {
  const cards = [
    <div className="polaroid">
      <img src={Image} alt="Norway" style={{ width: "100%" }} />
      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          Full Stack Developer Course
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          Full stack developer course helps you to master in the HTML, CSS,
          ReactJs, Express, Node JS, MongoDB, Angular.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">View More</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
    <div className="polaroid">
      <img src={Image1} alt="Norway" style={{ width: "100%" }} />
      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          Devops
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          DevOps bootcamp teaches you about AWS cloud, deployments, CI/CD
          pipeline and Git.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">Take Course</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
    <div className="polaroid">
      <img src={Image2} alt="Norway" style={{ width: "100%" }} />
      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          AWS Cloud Practitioner
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          The Amazon Web Services AWS Cloud and the world's basic
          infrastructure.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">View More</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
    <div className="polaroid">
      <img src={Image3} alt="Norway" style={{ width: "100%" }} />

      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          Cyber security
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          Cyber security courses cover a range of topics, including network
          security, encryption, and threat detection.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">View More</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
    <div className="polaroid">
      <img src={Image4} alt="Norway" style={{ width: "100%" }} />
      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          Data analyst
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          Data analyst courses cover a range of topics, including data cleaning,
          visualization, statistical analysis, machine learning.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">View More</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
    <div className="polaroid">
      <img src={Image5} alt="Norway" style={{ width: "100%" }} />
      <div className="container">
        <p className="py-4 fw-bold fs-6" style={{ height: "40px" }}>
          Data Science
        </p>
        <p className="text-justify fs-6" style={{ height: "80px" }}>
          Data science courses teach students how to analyze, interpret, and
          extract insights from data.{" "}
        </p>
        <div
          className="button-container-2 m-0 float-right"
          style={{ width: "100%" }}
        >
          <span className="mas">View More</span>
          <button type="button" name="Hover" className="w-100">
            View More
          </button>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <CourcesSlider cards={cards} />
      <Features />
      <Contact />
      <Faqs />
      <CardSlider />
      <Register />
      <RecruitSlider />
      <Footer />
    </div>
  );
}

export default App;
