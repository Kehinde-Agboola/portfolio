import React from "react";
// import { HiArrowNarrowRight } from "react-icons";
import res from "../images/intern.txt";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000] text-center">
      {/* Container */}
      <div className="max-w-2lg px-8 flex flex-col justify-center items-center h-full">
        <p className="text-[#ffa600]">Hello,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffa600]">
          <span className="text-white">I'm </span>
          Kehinde Agboola
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fff]">
          a Frontend <span className="text-[#ffa600]">Developer.</span>
        </h2>
        <div className="flex flex-col md:flex-row pt-10">
          <button className="text-white group border-2 px-6 border-[#fff] py-3 my-2 flex items-center hover:bg-[#ffa600] hover:border-white">
            View Work
            {/* <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span> */}
          </button>
          <button className="text-white group border-2 px-6 bg-[#ffa600] py-3 my-2 flex items-center border-[#fff]">
            <a href={res} download>
              Download CV
            </a>
            {/* <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span> */}
          </button>
        </div>
        {/* <div className="max-w-[750px] w-full flex  gap-8 text-white">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffa600]">
              About Me
            </p>
          </div>
          <div className="max-w-[520px]">
            <p>
              I am Kehinde and I'm passionate about building excellent software
              that improves the lives of those around me. specializing in
              building (and occasionally designing) exceptional digital
              experiences. Currently, I’m focused on building responsive
              frontend applications.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
