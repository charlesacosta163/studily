import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { GiBookmark } from "react-icons/gi";


import "@/public/hwhero.jpg"

const Hero = () => {
  return (
    <section className="section text-white flex justify-center items-center" style={{
      background: 'linear-gradient(135deg, #0a2e4d, #466882)', // Gradient colors
    }}>
      <div className="md:max-w-[600px] md:w-full text-center flex flex-col gap-2">
        <div className="text-blue-300 font-medium flex items-center gap-2 self-center text-sm!"> <GiBookmark /> Stay on track, stay successful!</div>
        <h1 className="h1 md:text-5xl text-4xl text-white">Manage your homework with ease</h1>
        <p className="p">
          Studily helps students stay organized, meet deadlines, and excel in
          their studies. Say goodbye to missed assignments and hello to academic
          success!
        </p>

        <Button
          variant="outline"
          className="bg-blue-600 text-white font-medium self-center border-none mt-4 rounded-lg"
        >
          Get Started
        </Button>

        <Image
            alt="Homework notebooks"
            src='/hwhero.jpg'
            className="mt-8 rounded-xl shadow-2xl"
            width={600}
            height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
