import React from "react";
import { whatweproduce } from "../../constants/index.jsx";
import { Reveal } from "../../utils/Reveal.jsx";
const Hero = () => {
  const { heading, smallheading, p1, p2 } = whatweproduce.hero[0];
  return (
    <section className=" flex-wrap md:flex  min-h-screen ">
      <div className="w-full lg:w-1/2 flex justify-center  lg:items-start">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FWhatWeProduce%2Fidcards.png?alt=media&token=dcb30fa3-b96b-43bb-9c76-48db9e1a4da4"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 md:p-20 px-4 py-5">
        <Reveal>
        <div className=" ">
          <h1 className="text-3xl md:text-5xl text-blue-950 font-extrabold animate-slidein [--slidein-delay:300ms]  opacity-1">
            {heading}
          </h1>
          <h2 className="text-xl  md:text-2xl pt-2 md:w-96 p-1 text-blue-950 animate-slidein [--slidein-delay:350ms]  opacity-1">
            {smallheading}
          </h2>
          <p className="pt-4 md:text-lg animate-slidein [--slidein-delay:400ms]  opacity-1">
            {p1}
          </p>
          <p className="pt-6 md:text-lg animate-slidein [--slidein-delay:450ms]  opacity-1">
            {p2}
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
