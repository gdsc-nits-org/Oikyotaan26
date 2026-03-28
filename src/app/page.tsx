import team from "../data/team.json";
import uiux from "../data/core.json";
import TeamCard from "../components/teamCard";
export default function Home() {
  return (
   <main className="relative bg-[#8A3123] min-h-screen w-full overflow-x-hidden">


       <img src="headerimg.png" alt="model" className="full-width " />
       <div className="  flex justify-center items-center mt-25 sm:mt-24 lg:mt-36 px-4">
        <img src="/oikyoteam.png" alt="team"  />
         <img
        src="/left1.png"
        alt="left"
        className="absolute left-6 top-10 sm:left-30 sm:top-30 w-15 sm:w-60 "
      />

      <img
        src="/left2.png"
        alt="left"
        className="absolute left-20 top-10 sm:left-25 sm:top-85 w-15 sm:w-60 "
      />

      {/* Right Images */}
      <img
        src="/right1.png"
        alt="right"
        className="absolute right-6 top-70 sm:right-30 sm:top-30 w-15 sm:w-60"
      />

      <img
        src="/right2.png"
        alt="right"
        className="absolute right-20 top-70 sm:right-25  sm:top-85 w-15 sm:w-60 "
      />
      <img
        src="tiger.png"
        alt="right"
        className="absolute right-10 top-20 w-20 sm:right-100 sm:w-70 "

      />
      
      </div>
      <div>
          <img
        src="/teamdesign.png"
        alt="right"
        className="w-full mt-12"
        
      />
      
      </div>
<div className="flex justify-center ">
  <div className="grid grid-cols-1 sm:grid-cols-3 ">
    {team.map((member, index) => (
      <TeamCard
        key={index}
        name={member.name}
        role={member.role}
        image={member.image}
        instagram={member.instagram}
        linkedin={member.linkedin}
        github={member.github}

      />
    ))}
  </div>
</div>
<div>
          
      
         <img
        src="/coredesign.png"
        alt="right"
        className=" w-full mt-36"
        
      />
      <div className="flex justify-center mt-24 ">
  <div className="grid grid-cols-1 sm:grid-cols-3 ">
    {uiux.map((member, index) => (
      <TeamCard
        key={index}
        name={member.name}
        role={member.role}
        image={member.image}
        instagram={member.instagram}
        linkedin={member.linkedin}
        github={member.github}
      />
    ))}
  </div>
</div>
      
      </div>

      
    </main>
  );
}