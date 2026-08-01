import React from "react";
import { Truck, ShieldCheck, BadgeDollarSign } from "lucide-react";

const Express = () => {
  const data = [
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Same-day on select items",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      desc: "100% encrypted checkout",
    },
    {
      icon: BadgeDollarSign,
      title: "Best Prices",
      desc: "Price-match guarantee",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              group flex items-center gap-4 sm:gap-5
              bg-white dark:bg-[#181818]
              border border-zinc-200 dark:border-white/10
              rounded-3xl p-5 sm:p-6
              hover:border-lime-400
              transition duration-300
              "
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition duration-300">
                <Icon
                  size={28}
                  className="text-lime-500 dark:text-lime-400 group-hover:text-black transition duration-300"
                />
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-white text-base sm:text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-500 dark:text-gray-400 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Express;
