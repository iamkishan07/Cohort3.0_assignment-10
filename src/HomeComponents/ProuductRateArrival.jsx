import React, { useContext } from "react";
import { Star, Zap } from "lucide-react";
import { MyStore } from "../context/ContextApi";
import RatingCardList from "./RatingCardList";

const ProductRateArrival = () => {
  const { productData } = useContext(MyStore);

  const topRated = productData.filter((item) => item.rating >= 4).slice(0, 5);
  const newArrival = productData.slice(-5);

  return (
    <section className="bg-zinc-100 dark:bg-[#111] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <RatingCardList
          title="Top Rated"
          icon={<Star size={22} className="fill-yellow-400 text-yellow-400" />}
          products={topRated}
        />

        <RatingCardList
          title="New Arrivals"
          icon={<Zap size={22} className="fill-lime-400 text-lime-400" />}
          products={newArrival}
        />
      </div>
    </section>
  );
};

export default ProductRateArrival;
