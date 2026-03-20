import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  github?:string;
};

export default function TeamCard({ name, role, image,instagram,linkedin,github }: Props) {
  return (
    <div className="group relative w-[300px] h-[400px] cursor-pointer font-naluka">

      {/* Stamp Frame */}
      <Image
        src="/images/stamp.png"
        alt="frame"
    fill
   
       
      />

      {/* Content inside stamp */}
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 hover:scale-90 hover:-translate-y-4 mt-6 font-naluka">

        {/* Developer Image */}
        <div className="cursor-pointer ">
          <Image
            src={image}
            alt={name}
            width={250}
            height={1000}
            className="rounded-lg h-60 transition-all duration-300"
          />
           {/* Name Box */}
        <div className="bg-[#FFB000] px-5 py-3 rounded-lg text-center mt-4 font-naluka text-2xl ">
          <p className="  text-black">{name}</p>
          <p className="text-sm text-black">{role}</p>
        </div>
        </div>

       

        {/* Social Icons */}
        <div className="flex gap-4 bg-[#FFB000] px-2 py-3 rounded-lg justify-center text-center  opacity-0 group-hover:opacity-100 transition w-64 group-hover:translate-y-2 ">
           {instagram && (
    <a href={instagram} target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-black" />
    </a>
  )}
            {linkedin && (
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-black" />
    </a>
  )}
          {github && (
    <a href={github} target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-black" />
    </a>
  )}
          
        </div>

      </div>
    </div>
  );
}