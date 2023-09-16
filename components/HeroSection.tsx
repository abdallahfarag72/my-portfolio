"use client";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-semibold mt-6 md:mt-0 md:text-6xl">
            Hi! I'm <br />
            <span
              className={`bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold ${quicksand.className}`}
            >
              Abdallah Azzam
            </span>
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A self-taught{" "}
            <span className="font-semibold text-teal-500">
              MERN Stack Developer{" "}
            </span>
            based in Cairo, Egypt.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            View Projects
          </Link>
        </div>
        <div className="md:mt-2 md:w-1/2">
          <Image src="/web-dev-3.png" alt="web" width={400} height={400} />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
