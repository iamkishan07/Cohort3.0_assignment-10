import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-10 ">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h2>

        <p className="text-gray-400 text-sm text-center">
          © 2026 SkyMart • Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
