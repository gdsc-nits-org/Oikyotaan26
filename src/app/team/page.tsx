"use client";
import team from "../../data/team.json";
import uiux from "../../data/core.json";
import techhead from "../../data/techHead.json";
import stucoord from "../../data/coord.json";
import TeamCard from "./components/TeamCard";

export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes pendulumLeft {
          0% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
          100% {
            transform: rotate(-8deg);
          }
        }

        @keyframes pendulumRight {
          0% {
            transform: rotate(8deg);
          }
          50% {
            transform: rotate(-8deg);
          }
          100% {
            transform: rotate(8deg);
          }
        }

        .pendulum-left {
          transform-origin: top center;
          animation: pendulumLeft 3s ease-in-out infinite;
        }

        .pendulum-right {
          transform-origin: top center;
          animation: pendulumRight 3s ease-in-out infinite;
        }

        /* Slight delay for realism */
        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }

        @keyframes dropPop {
          0% {
            transform: translateY(-300px) scale(0.9);
            opacity: 0;
          }
          60% {
            transform: translateY(30px) scale(1.05); /* overshoot */
            opacity: 1;
          }
          80% {
            transform: translateY(-10px) scale(0.98); /* bounce up */
          }
          100% {
            transform: translateY(0) scale(1); /* settle */
          }
        }

        .drop-pop {
          animation: dropPop 1s ease-out;
        }

        @keyframes tigerSwing {
          0% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
          100% {
            transform: rotate(-4deg);
          }
        }

        .tiger-swing {
          transform-origin: bottom center; /* ✅ pivot at feet */
          animation: tigerSwing 3s ease-in-out infinite;
        }
      `}</style>

      <main className="relative min-h-screen w-full overflow-x-hidden bg-[#8A3123]">
        <img
          src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888703/Group_1000006118_zsesjh.png"
          alt="model"
          className="full-width"
        />
        <div className="mt-16 flex items-center justify-center gap-4 px-4">
          {/* LEFT */}
          <div className="flex w-[15%] flex-col">
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888702/image_20_bdvxrm.png"
              className="pendulum-left h-auto w-full"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888701/image_25_o1g1zz.png"
              className="pendulum-left h-auto w-full delay-1"
              alt=""
            />
          </div>

          {/* CENTER */}
          <div className="relative w-[50%]">
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888704/Group_1000006168_qhhvfy.png"
              className="drop-pop h-auto w-full"
              alt=""
            />
            <img
              src="/tiger.png"
              className="tiger-swing absolute right-1 bottom-10 h-auto w-[30%] sm:bottom-20 lg:bottom-30"
              alt=""
            />
          </div>

          {/* RIGHT */}
          <div className="flex w-[15%] flex-col">
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888702/image_23_cs2kds.png"
              className="pendulum-right h-auto w-full"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888703/image_17_gukus6.png"
              className="pendulum-right h-auto w-full delay-2"
              alt=""
            />
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888699/Group_1000006182_1_z3kcdp.png"
          alt="right"
          className="mt-36 w-full"
        />
        <div className="flex justify-center">
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3">
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

        {/* SECTION TITLE */}
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-xl font-bold tracking-wide text-white sm:text-2xl lg:text-3xl">
            Student Coordinator
          </h2>

          {/* Underline */}
          <div className="mt-2 h-[2px] w-24 rounded bg-[#FFB000]"></div>
        </div>

        <div className="flex justify-center">
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3">
            {stucoord.map((member, index) => (
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
          <div>
            <img
              src="https://res.cloudinary.com/dsaaxuphe/image/upload/v1774888699/Group_1000006182_tllx72.png"
              alt="right"
              className="mt-12 w-full"
            />

            {/* SECTION TITLE */}
            <div className="mt-10 flex flex-col items-center">
              <h2 className="text-xl font-bold tracking-wide text-white sm:text-2xl lg:text-3xl">
                Tech Heads
              </h2>

              {/* Underline */}
              <div className="mt-2 h-[2px] w-24 rounded bg-[#FFB000]"></div>
            </div>

            {/* CARDS */}
            <div className="mt-10 flex justify-center">
              <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3">
                {techhead.map((member, index) => (
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

          {/* SECTION TITLE */}
          <div className="mt-10 flex flex-col items-center">
            <h2 className="text-xl font-bold tracking-wide text-white sm:text-2xl lg:text-3xl">
              Developers
            </h2>

            {/* Underline */}
            <div className="mt-2 h-[2px] w-24 rounded bg-[#FFB000]"></div>
          </div>

          <div className="mt-24 flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3">
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

        {/* </div> */}
      </main>
    </>
  );
}
