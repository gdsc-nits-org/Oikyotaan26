"use client";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

type Props = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
};

export default function TeamCard({
  name,
  role,
  image,
  instagram,
  linkedin,
  github,
}: Props) {
  const [open, setOpen] = useState(false);

  const isValidLink = (link?: string) => {
    if (!link) return false;
    if (link === "error") return false;
    return link.startsWith("http"); 
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className="group font-naluka relative h-[58vw] w-[42vw] cursor-pointer sm:h-[16.25rem] sm:w-[11.25rem] md:h-[18.75rem] md:w-[13.75rem] lg:h-[22.5rem] lg:w-[16.25rem] xl:h-[25rem] xl:w-[18.75rem]"
    >
      {/* Stamp Frame */}
      <div>
        <img
          src="/images/stamp.png"
          alt="frame"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-1 transition-all duration-300 sm:gap-2 ${
          open ? "-translate-y-2 scale-90" : ""
        } sm:group-hover:-translate-y-2 sm:group-hover:scale-90`}
      >
        {/* Image */}
        <div className="relative mt-[8%] h-[52%] w-[82%] overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Name */}
        <div className="rounded-lg bg-[#FFB000] px-[24%] py-[2%] text-center text-[0.4rem] sm:text-[12px] lg:text-[12px]">
          <p className="leading-tight text-black">{name}</p>
          <p className="text-[0.5625rem] sm:text-xs">{role}</p>
        </div>

        {/* Social Icons */}
        {(isValidLink(instagram) ||
          isValidLink(linkedin) ||
          isValidLink(github)) && (
          <div
            className={`flex justify-center gap-2 rounded-lg bg-[#FFB000] px-[22%] py-[3%] transition-all duration-300 sm:gap-4 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100`}
          >
            {isValidLink(instagram) && (
              <a href={instagram} target="_blank">
                <FaInstagram className="text-xs text-black sm:text-base" />
              </a>
            )}

            {isValidLink(linkedin) && (
              <a href={linkedin} target="_blank">
                <FaLinkedin className="text-xs text-black sm:text-base" />
              </a>
            )}

            {isValidLink(github) && (
              <a href={github} target="_blank">
                <FaGithub className="text-xs text-black sm:text-base" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}