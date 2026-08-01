import React, { useContext } from "react";
import { ShoppingBag, Package, IndianRupee, Heart } from "lucide-react";
import { MyStore } from "../context/ContextApi";

const CartOperations = () => {
  const { productData, cartProducts, wishlistProducts } = useContext(MyStore);

  const totalItems = cartProducts?.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalValue = cartProducts?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cards = [
    {
      icon: ShoppingBag,
      number: totalItems || 0,
      title: "Total Items",
      desc: "In your bag",
    },
    {
      icon: Package,
      number: productData?.length || 0,
      title: "Products",
      desc: "Available now",
    },
    {
      icon: IndianRupee,
      number: `₹${totalValue || 0}`,
      title: "Total Value",
      desc: "Cart amount",
    },
    {
      icon: Heart,
      number: wishlistProducts?.length || 0,
      title: "Wishlist",
      desc: "Liked items",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="
              group
              bg-white
              dark:bg-[#181818]
              border
              border-zinc-200
              dark:border-white/10
              rounded-3xl
              p-5
              flex
              items-center
              gap-5
              hover:border-lime-400
              transition
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
                <Icon className="text-lime-500 dark:text-lime-400" size={26} />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {card.number}
                </h1>

                <h3 className="text-zinc-700 dark:text-gray-300 font-semibold">
                  {card.title}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-gray-500">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CartOperations;
