"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isNavbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2">
            <div className="md:py-3 md:block">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white relative">
                <span className="text-4xl font-semibold absolute select-none left-6 top-3 text-black">
                  A
                </span>
                <span className="text-4xl font-semibold absolute select-none left-5 top-2 text-white">
                  A
                </span>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar((prev) => !prev)}>
                {isNavbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-0 md:block md:pb-0 md:mt-0 md:animate-none ${
              isNavbar ? "animate-slideRight" : "animate-slideLeft hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:space-y-0 flex flex-col md:flex-row md:space-x-6">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.toLowerCase()}
                    className={`block lg:inline-block text-center cursor-pointer ${
                      item === "Contact"
                        ? "md:border-2 md:rounded-full border-indigo-500 md:p-2 md:hover:bg-gradient-to-tr from-blue-500 to-indigo-500 md:dark:hover:text-white"
                        : "text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-indigo-400 "
                    }`}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar((prev) => !prev)}
                  >
                    {item}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl mt-[20px] md:mt-0"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl mt-[20px] md:mt-0"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
