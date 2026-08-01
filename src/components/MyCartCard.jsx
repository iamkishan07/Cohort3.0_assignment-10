import React, { useContext } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { MyStore } from "../context/ContextApi";

const MyCartCard = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(MyStore);

  return (
    <div
      className="
      border border-zinc-700 
      rounded-2xl 
      p-4 
      flex 
      gap-4
      transition 
      duration-300
      hover:border-[#d6ff00]/40
      hover:-translate-y-1
      "
    >
      {/* IMAGE */}

      <img
        src={product.thumbnail}
        alt={product.title}
        className="
        w-20
        h-20
        rounded-xl
        object-cover
        shrink-0
        "
      />

      {/* CONTENT */}

      <div className="flex-1 min-w-0">
        <h3
          className="
          text-white 
          text-lg 
          font-medium 
          line-clamp-2
          "
        >
          {product.title}
        </h3>

        <p
          className="
          text-[#d6ff00] 
          text-2xl 
          font-bold 
          mt-2
          "
        >
          ${(product.price * product.quantity).toFixed(2)}
        </p>

        <p className="text-zinc-500 text-sm">${product.price} each</p>

        <div
          className="
          flex 
          justify-between 
          items-center 
          mt-4
          "
        >
          {/* QUANTITY */}

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="
              w-8
              h-8
              border
              border-zinc-700
              rounded-lg
              flex
              items-center
              justify-center
              text-white
              hover:border-[#d6ff00]
              hover:scale-110
              active:scale-95
              transition
              "
            >
              <FiMinus size={14} />
            </button>

            <span
              className="
              text-white 
              w-6 
              text-center
              "
            >
              {product.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="
              w-8
              h-8
              border
              border-zinc-700
              rounded-lg
              flex
              items-center
              justify-center
              text-white
              hover:border-[#d6ff00]
              hover:scale-110
              active:scale-95
              transition
              "
            >
              <FiPlus size={14} />
            </button>
          </div>

          {/* DELETE */}

          <button
            onClick={() => removeFromCart(product.id)}
            className="
            text-red-500
            hover:scale-110
            hover:rotate-6
            transition
            "
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
