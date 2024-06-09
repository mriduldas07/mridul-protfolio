import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/Mridul-Resume (1).88ab4c443132b706d3c1 (1).pdf";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            <img
              src="/img/computer.webp"
              alt="logo"
              className="w-11 object-contain"
            />
            <span className="pl-3 text-xl">Mridul</span>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="cursor-pointer">
            <a href="https://github.com/mriduldas07" target="_blank">
              <FaGithub size={29} />
            </a>
          </span>
          <span className="cursor-pointer">
            <a
              href="https://www.linkedin.com/in/mridul-das-8ba910220/"
              target="_blank"
            >
              <FaLinkedin size={29} />
            </a>
          </span>
          <span className="cursor-pointer">
            <a href="https://wa.me/8801571124907" target="_blank">
              <IoLogoWhatsapp size={29} />
            </a>
          </span>
          <span className="cursor-pointer">
            <a href="mailto:mriduldas0325@gmail.com">
              <SiGmail size={29} />
            </a>
          </span>
          <div className="px-5 py-2 bg-red-600 text-xl hover:cursor-pointer rounded-md">
            <a href={pdf} download>
              <span className="cursor-pointer">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
