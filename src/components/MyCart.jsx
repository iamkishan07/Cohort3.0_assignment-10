import React, { useContext } from "react";
import { FiX, FiShoppingBag } from "react-icons/fi";
import { MyStore } from "../context/ContextApi";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const { isCartOpen, setIsCartOpen, cartProducts, totalPrice, clearCart } =
    useContext(MyStore);

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;

    alert("Order placed successfully 🚀");

    clearCart();
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setIsCartOpen(false)}
        className={`
        fixed inset-0 z-40 
        bg-black/60 backdrop-blur-sm
        transition-all duration-500
        ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}

      <div
        className={`
        fixed top-0 right-0 z-50
        h-screen
        w-full sm:w-[430px]
        bg-[#111111]
        border-l border-zinc-800
        flex flex-col
        transition-all duration-500

        ${
          isCartOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }
        `}
      >
        {/* HEADER */}

        <div
          className="
          flex items-center justify-between
          px-6 py-5
          border-b border-zinc-800
          "
        >
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-[#d6ff00] text-xl" />

            <h2 className="text-2xl font-semibold text-white">Cart</h2>

            <span
              className="
              bg-[#d6ff00]/15
              text-[#d6ff00]
              text-xs
              px-3
              py-1
              rounded-full
              "
            >
              {cartProducts.length} Items
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="
            w-10 h-10
            rounded-full
            hover:bg-zinc-800
            flex items-center justify-center
            "
          >
            <FiX className="text-gray-400 text-xl" />
          </button>
        </div>

        {/* CART ITEMS */}

        <div
          className="
          flex-1
          overflow-y-auto
          p-6
          space-y-4
          "
        >
          {cartProducts.length > 0 ? (
            cartProducts.map((elem) => (
              <MyCartCard key={elem.id} product={elem} />
            ))
          ) : (
            <div
              className="
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-center
                "
            >
              <FiShoppingBag size={60} className="text-zinc-700 mb-5" />

              <h2
                className="
                  text-white
                  text-xl
                  font-semibold
                  "
              >
                Your cart is empty
              </h2>

              <p
                className="
                  text-zinc-500
                  mt-2
                  "
              >
                Add some amazing products and start shopping
              </p>

              <button
                onClick={() => setIsCartOpen(false)}
                className="
                  mt-6
                  px-6
                  py-3
                  rounded-xl
                  bg-[#d6ff00]
                  text-black
                  font-semibold
                  "
              >
                Browse Products →
              </button>
            </div>
          )}
        </div>

        {/* FOOTER */}

        {cartProducts.length > 0 && (
          <div
            className="
            border-t
            border-zinc-800
            p-6
            "
          >
            <div
              className="
              flex
              justify-between
              items-center
              mb-6
              "
            >
              <span className="text-zinc-400">Total</span>

              <span
                className="
                text-white
                text-3xl
                font-bold
                "
              >
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="
              w-full
              py-4
              rounded-xl
              bg-[#d6ff00]
              text-black
              text-lg
              font-semibold
              hover:scale-[1.02]
              transition
              "
            >
              Checkout →
            </button>

            <button
              onClick={clearCart}
              className="
              w-full
              mt-4
              text-sm
              text-zinc-500
              hover:text-red-500
              transition
              "
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCart;
