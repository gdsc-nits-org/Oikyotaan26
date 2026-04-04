import team from "../../data/team.json";
import uiux from "../../data/core.json";
import TeamCard from "./components/TeamCard";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-[#8A3123] min-h-screen w-full overflow-x-hidden">


      <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888703/Group_1000006118_zsesjh.png" alt="model" className="full-width " />
      <div className="flex justify-center items-center gap-4 mt-16 px-4">

        {/* LEFT */}
        <div className="flex flex-col  w-[15%]">
          <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888702/image_20_bdvxrm.png" className="w-full h-auto" alt="" />
          <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888701/image_25_o1g1zz.png" className="w-full h-auto" alt="" />
        </div>

        {/* CENTER */}
        <div className="w-[50%] relative ">
          <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888704/Group_1000006168_qhhvfy.png" className="w-full h-auto" alt="" />
          <img src="/tiger.png" className="absolute bottom-10 sm:bottom-20 lg:bottom-30 right-1 w-[30%] h-auto" alt="" />
        </div>




        {/* RIGHT */}
        <div className="flex flex-col  w-[15%]">
          <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888702/image_23_cs2kds.png" className="w-full h-auto" alt="" />
          <img src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888703/image_17_gukus6.png" className="w-full h-auto" alt="" />
        </div>

      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888699/Group_1000006182_tllx72.png"
          alt="right"
          className="w-full mt-12"

        />

      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 mt-10 sm:grid-cols-3  ">
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
          src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888699/Group_1000006182_1_z3kcdp.png"
          alt="right"
          className=" w-full mt-36"

        />
        <div className="flex justify-center mt-24 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 ">
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