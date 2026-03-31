"use client";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
type Props = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  github?:string;
};

export default function TeamCard({ name, role, image,instagram,linkedin,github }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div  onClick={() => setOpen(!open)}
    className="group relative 
   w-[42vw] h-[58vw]    
  sm:w-[11.25rem] sm:h-[16.25rem]   
md:w-[13.75rem] md:h-[18.75rem]   
lg:w-[16.25rem] lg:h-[22.5rem]    
xl:w-[18.75rem] xl:h-[25rem] 
onClick={() => setOpen(!open)}
  cursor-pointer font-naluka">

  {/* Stamp Frame */}
  <div >
  <Image
    src="/images/stamp.png"
    alt="frame"
    fill
    className="object-contain"
  />
  </div>

  {/* Content */}
  <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all duration-300  ${open ? "scale-90 -translate-y-2" : ""} sm:group-hover:scale-90 sm:group-hover:-translate-y-2`}>

    {/* Developer Image */}
     <div className=" mt-[8%] 
  w-[82%] h-[52%]  
   relative overflow-hidden rounded-lg">
    <Image src={image} alt={name} fill
     className="object-cover" />
  </div>
   

    {/* Name Box */}
    <div className="bg-[#FFB000] 
       px-[24%] py-[2%]
      rounded-lg text-center 
      text-[0.4rem] sm:text-[12px] lg:text-[12px]">


      <p className="text-black leading-tight">{name}</p>
      <p className="text-[0.5625rem]  sm:text-xs">{role}</p>

    </div>

    {/* Social Icons */}
   <div className={`
  flex gap-2 sm:gap-4 
  bg-[#FFB000] 
  px-[22%] py-[3%] 
  rounded-lg 
  transition-all duration-300 
  justify-center

  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}

  sm:opacity-0 sm:translate-y-2
  sm:group-hover:opacity-100 
  sm:group-hover:translate-y-0
`}>

      {instagram && (
        <a href={instagram} target="_blank">
          <FaInstagram className="text-black text-xs sm:text-base" />
        </a>
      )}

      {linkedin && (
        <a href={linkedin} target="_blank">
          <FaLinkedin className="text-black text-xs sm:text-base" />
        </a>
      )}

      {github && (
        <a href={github} target="_blank">
          <FaGithub className="text-black text-xs sm:text-base" />
        </a>
      )}

    </div>

  </div>
</div>
  );
}