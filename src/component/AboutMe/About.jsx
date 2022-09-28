import React from "react";
import ken from "../images/kenn.png";
const About = () => {
  return (
    <div name="about" className="w-full h-screen/2 bg-[#000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffa600]">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full flex  gap-8">
          <div className="max-w-[510px] self-center">
            <p>
              I am Kehinde and I'm passionate about building excellent software
              that improves the lives of those around me. specializing in
              building (and occasionally designing) exceptional digital
              experiences. Currently, I’m focused on building responsive
              frontend applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
