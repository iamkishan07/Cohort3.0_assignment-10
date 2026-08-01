import React from "react";

const Footer = () => {
  return (
    <footer
      className="
      border-t
      border-zinc-200
      dark:border-white/10

      mt-10

      bg-white
      dark:bg-[#0b0b0b]

      transition-colors
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        py-6
        sm:py-8

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        gap-4
        "
      >
        <h2
          className="
          text-2xl
          font-bold

          text-zinc-900
          dark:text-white
          "
        >
          Sky
          <span className="text-lime-500 dark:text-lime-400">Mart</span>
        </h2>

        <p
          className="
          text-zinc-500
          dark:text-gray-400

          text-sm
          text-center
          "
        >
          © 2026 SkyMart • Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
