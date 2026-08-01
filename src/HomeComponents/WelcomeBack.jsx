import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const WelcomeBack = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(Auth);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("GOOD MORNING");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("GOOD AFTERNOON");
      } else if (hour >= 17 && hour < 22) {
        setGreeting("GOOD EVENING");
      } else {
        setGreeting("GOOD NIGHT");
      }
    };

    updateGreeting();
  }, []);

  return (
    <section
      className="
      relative
      border
      border-zinc-200
      dark:border-zinc-700

      rounded-3xl
      max-w-7xl
      mx-auto

      px-4
      sm:px-6
      lg:px-8

      py-8
      sm:py-12
      lg:py-16

      bg-white
      dark:bg-[#111111]

      overflow-hidden

      transition-colors
      "
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(#71717a 1px, transparent 1px),
          linear-gradient(90deg, #71717a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="
            inline-flex
            items-center

            px-4
            py-2

            rounded-full

            bg-lime-400/10

            border
            border-lime-400/20

            text-lime-600
            dark:text-lime-400

            text-sm
            font-semibold
            tracking-wider
            "
          >
            👋 {greeting}
          </span>

          <h1
            className="
            mt-6

            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-extrabold

            text-zinc-900
            dark:text-white

            leading-tight
            "
          >
            Welcome Back,
          </h1>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-extrabold

            text-lime-500
            dark:text-lime-400
            "
          >
            {loggedInUser?.name || "User"}
          </h1>

          <p
            className="
            mt-6

            text-zinc-500
            dark:text-gray-400

            text-lg
            leading-8

            max-w-xl
            "
          >
            Discover trending products with exclusive discounts and
            lightning-fast delivery. Shop smarter with SkyMart.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <button
              onClick={() => navigate("/main/shop")}
              className="
              flex
              items-center
              justify-center

              px-8
              py-4

              rounded-xl

              bg-lime-400

              text-black

              font-bold

              hover:bg-lime-300

              transition
              "
            >
              Shop Now →
            </button>

            <button
              onClick={() => navigate("/main/shop")}
              className="
              px-8
              py-4

              rounded-xl

              border
              border-lime-400

              text-lime-600
              dark:text-lime-400

              hover:bg-lime-400
              hover:text-black

              transition
              "
            >
              View Products
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            className="
            bg-zinc-100
            dark:bg-[#181818]

            border
            border-lime-400/20

            rounded-3xl

            p-8

            hover:border-lime-400

            transition
            "
          >
            <h1 className="text-5xl font-bold text-lime-500 dark:text-lime-400">
              20+
            </h1>

            <p className="text-zinc-500 dark:text-gray-400 mt-2">
              Products Available
            </p>
          </div>

          <div
            className="
            bg-zinc-100
            dark:bg-[#181818]

            border
            border-lime-400/20

            rounded-3xl

            p-8

            hover:border-lime-400

            transition
            "
          >
            <h1 className="text-5xl font-bold text-lime-500 dark:text-lime-400">
              FREE
            </h1>

            <p className="text-zinc-500 dark:text-gray-400 mt-2">
              Delivery above ₹999
            </p>
          </div>

          <div
            className="
            sm:col-span-2

            rounded-3xl

            bg-gradient-to-r
            from-lime-400/20
            to-transparent

            border
            border-lime-400/20

            p-8
            "
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              ⚡ Flash Sale
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-gray-300">
              Save up to{" "}
              <span className="text-lime-500 dark:text-lime-400 font-semibold">
                50%
              </span>{" "}
              on selected products this weekend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBack;
