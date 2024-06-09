import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Social() {
  return (
    <div className="flex justify-evenly mt-8">
      <div className="flex items-center gap-5">
        <span className="cursor-pointer">
          <a href="https://github.com/mriduldas07" target="_blank">
            <FaGithub size={30} />
          </a>
        </span>
        <span className="cursor-pointer">
          <a
            href="https://www.linkedin.com/in/mridul-das-8ba910220/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </span>
        <span className="cursor-pointer">
          <a href="https://wa.me/8801571124907" target="_blank">
            <IoLogoWhatsapp size={30} />
          </a>
        </span>
        <span className="cursor-pointer">
          <a href="mailto:mriduldas0325@gmail.com">
            <SiGmail size={30} />
          </a>
        </span>
      </div>
      <div className="px-8 py-2 bg-purple-900 text-xl hover:cursor-pointer">
        <span className="cursor-pointer">Resume</span>
      </div>
    </div>
  );
}
