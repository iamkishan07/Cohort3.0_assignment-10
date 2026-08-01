import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { MyStore } from "../context/ContextApi";
import { useNavigate } from "react-router";

const ProuductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cartProducts, addToCart, setIsCartOpen } = useContext(MyStore);

  const isInCart = cartProducts.some((item) => item.id === product.id);

  return (
    <div
      onClick={() => navigate(`/main/product/${product.id}`)}
      className="w-full bg-[#111111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-lime-400 transition-all duration-300 group cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative bg-[#1b1b1b] h-52 sm:h-60 lg:h-64 flex items-center justify-center overflow-hidden">
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 sm:h-44 lg:h-48 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 text-white">
        <p className="text-lime-400 text-xs sm:text-sm font-semibold mb-2">
          Premium Quality
        </p>

        <h3 className="text-base sm:text-lg font-bold leading-tight line-clamp-2 min-h-[48px]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>

          <span className="text-gray-400 text-xs sm:text-sm">
            (120 Reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between gap-3 mt-5">
          <div>
            <p className="text-gray-400 text-xs sm:text-sm">Price</p>

            <h1 className="text-xl sm:text-2xl font-bold text-lime-400">
              {product.price}$
            </h1>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();

              if (!isInCart) {
                addToCart(product);
              }

              setIsCartOpen(true);
            }}
            className={`flex items-center gap-2 font-semibold px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition duration-300
    ${
      isInCart
        ? "bg-green-500 text-white hover:bg-green-600"
        : "bg-lime-400 text-black hover:bg-lime-300"
    }`}
          >
            <ShoppingCart size={18} />

            <span className="hidden sm:block">
              {isInCart ? "Added" : "Add"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProuductCard;
