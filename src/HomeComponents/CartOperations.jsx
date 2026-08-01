import React, { useContext } from "react";
import { ShoppingBag, Package, IndianRupee, Heart } from "lucide-react";
import { MyStore } from "../context/ContextApi";

const CartOperations = () => {
  const { productData, cartProducts, products, wishlistProducts } =
    useContext(MyStore);

  const totalItems = cartProducts?.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalValue = cartProducts?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {/* Total Items */}
        <div className="group bg-[#181818] border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:border-lime-400 transition">
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
            <ShoppingBag className="text-lime-400" size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">{totalItems || 0}</h1>

            <h3 className="text-gray-300 font-semibold">Total Items</h3>

            <p className="text-sm text-gray-500">In your bag</p>
          </div>
        </div>

        {/* Total Products */}
        <div className="group bg-[#181818] border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:border-lime-400 transition">
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
            <Package className="text-lime-400" size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              {productData?.length || 0}
            </h1>

            <h3 className="text-gray-300 font-semibold">Products</h3>

            <p className="text-sm text-gray-500">Available now</p>
          </div>
        </div>

        {/* Total Value */}
        <div className="group bg-[#181818] border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:border-lime-400 transition">
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
            <IndianRupee className="text-lime-400" size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              ₹{totalValue || 0}
            </h1>

            <h3 className="text-gray-300 font-semibold">Total Value</h3>

            <p className="text-sm text-gray-500">Cart amount</p>
          </div>
        </div>

        {/* Wishlist */}

        <div className="group bg-[#181818] border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:border-lime-400 transition">
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
            <Heart className="text-lime-400" size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              {wishlistProducts?.length || 0}
            </h1>

            <h3 className="text-gray-300 font-semibold">Wishlist</h3>

            <p className="text-sm text-gray-500">Liked items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartOperations;
