import React from "react";
import { ShieldCheck, Zap, Users, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const OurTeam = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Trust",
      desc: "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: <Zap size={30} />,
      title: "Speed",
      desc: "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: <Users size={30} />,
      title: "Community",
      desc: "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: <Award size={30} />,
      title: "Quality",
      desc: "We curate the best—no filler, no junk, just great products.",
    },
  ];

  const team = [
    {
      name: "Kishan Singh",
      role: "Founder & CEO",
    },
    {
      name: "Aman Sharma",
      role: "Product Manager",
    },
    {
      name: "Riya Patel",
      role: "UI/UX Designer",
    },
    {
      name: "Rahul Verma",
      role: "Marketing Lead",
    },
  ];

  return (
    <section
      className="
      bg-white
      dark:bg-black
      text-black
      dark:text-white
      py-10 sm:py-16
      px-4 sm:px-6
    "
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Values */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            What We{" "}
            <span className="text-lime-500 dark:text-lime-400">Stand For</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            Everything we build is guided by these core principles.
          </p>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 sm:gap-6
          "
          >
            {values.map((item, index) => (
              <div
                key={index}
                className="
                bg-gray-100
                dark:bg-[#111111]
                border
                border-gray-300
                dark:border-gray-800
                rounded-2xl
                p-5 sm:p-6
                hover:border-lime-400
                hover:-translate-y-2
                transition
                duration-300
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-lime-400
                  text-black
                  flex
                  items-center
                  justify-center
                  mb-5
                "
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p
                  className="
                  text-gray-600
                  dark:text-gray-400
                  leading-7
                  text-sm sm:text-base
                "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            Meet Our{" "}
            <span className="text-lime-500 dark:text-lime-400">Team</span>
          </h2>

          <p
            className="
            text-gray-600
            dark:text-gray-400
            text-center
            mb-8 sm:mb-12
          "
          >
            The people behind SkyMart.
          </p>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 sm:gap-6
          "
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="
                bg-gray-100
                dark:bg-[#111111]
                border
                border-gray-300
                dark:border-gray-800
                rounded-2xl
                p-6 sm:p-8
                text-center
                hover:border-lime-400
                transition
                "
              >
                <div
                  className="
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-full
                  bg-lime-400
                  text-black
                  flex
                  items-center
                  justify-center
                  text-3xl
                  sm:text-4xl
                  font-bold
                  mx-auto
                  mb-5
                "
                >
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {member.name}
                </h3>

                <p
                  className="
                  text-lime-600
                  dark:text-lime-400
                  mt-2
                "
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="
          bg-gradient-to-r
          from-lime-400
          to-lime-500
          rounded-3xl
          p-6 sm:p-10 lg:p-12
          text-center
          text-black
        "
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Shop?</h2>

          <p
            className="
            mt-4
            text-base sm:text-lg
            max-w-2xl
            mx-auto
            leading-7
          "
          >
            Explore thousands of premium products at unbeatable prices and
            experience shopping like never before.
          </p>

          <button
            onClick={() => navigate("/main/shop")}
            className="
            mt-7 sm:mt-8
            bg-black
            text-white
            px-6 sm:px-8
            py-3 sm:py-4
            rounded-xl
            font-semibold
            flex
            items-center
            gap-3
            mx-auto
            hover:bg-gray-900
            transition
            "
          >
            Browse Products
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
