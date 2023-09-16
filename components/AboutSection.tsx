"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "MongoDB" },
];

const AboutSection = () => {
  const [isImageOneVisible, setIsImageOneVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageOneVisible((prevState) => !prevState);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello there! I'm Abdallah Azzam, a recent graduate from the
              Faculty of Agriculture at Cairo University, class of 2023. While
              my academic journey started with soil and crops, I soon found
              myself on a different path.
            </p>
            <br />
            <p>
              After discovering my passion for technology, I took the leap into
              the world of web development, teaching myself the MERN stack from
              the ground up. It's been a fascinating journey of self-discovery
              and skill-building.
            </p>
            <br />
            <p>
              Now, I'm cultivating code instead of crops, and I'm excited to see
              what kind of digital harvests I can yield. My goal is to create
              intuitive and engaging web experiences that leave users coming
              back for more.
            </p>
            <br />
            <p>
              So, whether it's food or code, I'm always eager to dive in and
              create something special. Thanks for stopping by, and remember,
              the only bugs I can't fix are the ones in the kitchen! 🐞🍳
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div>
              <Image
                src={isImageOneVisible ? "/web-2.png" : "/food.png"}
                alt=""
                width={325}
                height={325}
                className={`md:block md:relative md:bottom-4 md:left-32 md:z-0 animate-${
                  isImageOneVisible ? "fadeIn" : "fadeOut"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
