import React from "react";
import { Truck, ShieldCheck, BadgeDollarSign } from "lucide-react";

const Express = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {/* Fast Delivery */}
        <div className="group flex items-center gap-4 sm:gap-5 bg-[#181818] border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-lime-400 transition duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition duration-300">
            <Truck
              size={28}
              className="text-lime-400 group-hover:text-black transition duration-300"
            />
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-bold">
              Fast Delivery
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Same-day on select items
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="group flex items-center gap-4 sm:gap-5 bg-[#181818] border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-lime-400 transition duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition duration-300">
            <ShieldCheck
              size={28}
              className="text-lime-400 group-hover:text-black transition duration-300"
            />
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-bold">
              Secure Payment
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              100% encrypted checkout
            </p>
          </div>
        </div>

        {/* Best Prices */}
        <div className="group flex items-center gap-4 sm:gap-5 bg-[#181818] border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-lime-400 transition duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition duration-300">
            <BadgeDollarSign
              size={28}
              className="text-lime-400 group-hover:text-black transition duration-300"
            />
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-bold">
              Best Prices
            </h3>

            <p className="text-gray-400 text-sm mt-1">Price-match guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Express;
