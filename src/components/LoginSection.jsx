import React from "react";
import { Bolt } from "lucide-react";
import StatCard from "./StatCard";

const LoginSection = () => {
  return (
    <div
      className="
      hidden
      lg:flex
      flex-col
      justify-between
      p-10
      xl:p-16

      bg-zinc-100
      dark:bg-[#0b0b0b]

      transition-colors
      duration-300
      "
    >
      {/* Logo */}

      <div className="flex items-center gap-3">
        <div
          className="
          w-12
          h-12
          rounded-xl
          bg-lime-400
          flex
          items-center
          justify-center
          "
        >
          <Bolt className="text-black" />
        </div>

        <h1
          className="
          text-4xl
          font-bold

          text-zinc-900
          dark:text-white
          "
        >
          Sky
          <span className="text-lime-500 dark:text-lime-400">Mart</span>
        </h1>
      </div>

      {/* Hero */}

      <div>
        <p
          className="
          text-lime-500
          dark:text-lime-400

          tracking-widest
          uppercase
          mb-4
          "
        >
          Welcome Back
        </p>

        <h1
          className="
          text-5xl
          xl:text-7xl

          font-bold
          leading-tight

          text-zinc-900
          dark:text-white
          "
        >
          Shop the future.
          <br />
          <span className="text-lime-500 dark:text-lime-400">Today.</span>
        </h1>

        <p
          className="
          text-zinc-500
          dark:text-gray-400

          text-lg
          xl:text-xl

          mt-6
          max-w-xl
          leading-8
          "
        >
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-3
        gap-4
        xl:gap-6
        mt-10
        "
      >
        <StatCard number="20K+" title="Products" />

        <StatCard number="50K+" title="Users" />

        <StatCard number="4.9★" title="Rating" />
      </div>
    </div>
  );
};

export default LoginSection;
