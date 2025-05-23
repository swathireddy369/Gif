import React from "react";
import { membership } from "../../constants";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";

const Hero = () => {
  const heading = membership[0].heading;
  const subheading = membership[1].subheading;
  const smallheading = membership[2].smallheading;
  const boldp1 = membership[3].boldp1;
  const p2 = membership[4].p2;

  return (
    <section>
      <div className="flex-wrap md:flex ">
        <div className="md:w-3/5 flex justify-center items-center ">
          <div className="md:w-full lg:px-52 p-10 ">
            <Reveal>
            <h1 className="text-3xl  md:text-5xl font-extrabold text-white animate-slidein [--slidein-delay:300ms]  opacity-1 ">
              {heading}
            </h1>
            <h2 className="text-xl md:text-2xl pt-5 w-56 md:w-44  font-bold text-white animate-slidein [--slidein-delay:400ms]  opacity-1 ">
              {subheading}
            </h2>
            <p className="text-lg pt-5 md:w-[80%] animate-slidein [--slidein-delay:500ms]  opacity-1 ">
              {smallheading}
            </p>
            </Reveal>
          </div>
        </div>
        <div className="md:w-2/5">
          <img
            className="md:h-[500px]"
            src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FMemership%2Fpexels-christina-morillo-1181406.jpg?alt=media&token=433d1fec-b37b-448b-8604-0ccdbbe4683e"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
