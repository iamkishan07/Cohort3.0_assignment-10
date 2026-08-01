import React, { useContext } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/ContextApi";

const RatingCardList = ({ title, icon, products }) => {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useContext(MyStore);

  return (
    <div className="bg-[#181818] border border-white/10 rounded-3xl p-5 sm:p-7">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          {icon}

          <h2 className="text-xl sm:text-3xl font-bold text-white">{title}</h2>
        </div>

        <button
          onClick={() => navigate("/main/shop")}
          className="flex items-center gap-2 text-lime-400 font-medium hover:gap-3 transition-all"
        >
          See all
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-4 sm:space-y-5">
        {products.map((item) => (
          <div
            onClick={() => navigate(`/main/product/${item.id}`)}
            key={item.id}
            className="flex items-center justify-between gap-3 border border-white/10 rounded-3xl px-4 sm:px-6 py-4 sm:py-5 hover:border-lime-400 transition duration-300 cursor-pointer"
          >
            {/* Product Info */}
            <div className="flex items-center gap-3 sm:gap-5 min-w-0">
              <img
                src={item.images}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                  {item.title}
                </h3>

                <p className="text-lime-400 font-bold text-lg sm:text-xl mt-1">
                  ${item.price}
                </p>
              </div>
            </div>

            {/* Add Cart */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
                setIsCartOpen(true);
              }}
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lime-400/10 flex items-center justify-center hover:bg-lime-400 transition group"
            >
              <ShoppingBag
                size={20}
                className="text-lime-400 group-hover:text-black transition"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCardList;
