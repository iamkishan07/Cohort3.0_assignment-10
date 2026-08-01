import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, LogOut, ShoppingBag, Menu, X } from "lucide-react";
import { MyStore } from "../context/ContextApi";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
  const { setIsCartOpen, cartProducts } = useContext(MyStore);
  const { loggedInUser, setLoggedInUser } = useContext(Auth);
  const [isOpen, setIsOpen] = useState(false);

  const noOfCartItems = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-xl border-b border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-11 w-11 rounded-xl bg-lime-400 flex items-center justify-center">
            <ShoppingBag className="text-black" size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lime-400">SkyMart</h2>

            <p className="text-xs text-gray-400 tracking-[3px]">SHOP SMART</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            end
            to="/main"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive ? "text-lime-400" : "text-gray-300 hover:text-lime-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="shop"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive ? "text-lime-400" : "text-gray-300 hover:text-lime-400"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive ? "text-lime-400" : "text-gray-300 hover:text-lime-400"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* User */}
          <div className="flex items-center gap-3 bg-[#202020] border border-lime-400/20 rounded-full px-3 py-2 hover:border-lime-400 transition">
            <div className="h-10 w-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">
              K
            </div>

            <div>
              <p className="text-white text-sm font-semibold">
                {loggedInUser ? loggedInUser.name : "Guest"}
              </p>

              <p className="text-xs text-gray-400">Welcome Back</p>
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative h-11 w-11 rounded-xl bg-[#202020] border border-lime-400/20 flex items-center justify-center hover:border-lime-400 transition"
          >
            <ShoppingCart className="text-lime-400" size={20} />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              {noOfCartItems}
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              setLoggedInUser(null);
              localStorage.removeItem("loggedInUser");
            }}
            className="h-11 w-11 rounded-xl bg-[#202020] border border-lime-400/20 flex items-center justify-center hover:border-red-500 transition"
          >
            <LogOut className="text-red-400" size={20} />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative h-10 w-10 rounded-lg bg-[#202020] border border-lime-400/20 flex items-center justify-center"
          >
            <ShoppingCart size={18} className="text-lime-400" />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-10 w-10 rounded-lg bg-[#202020] border border-lime-400/20 flex items-center justify-center"
          >
            {isOpen ? (
              <X className="text-white" size={20} />
            ) : (
              <Menu className="text-white" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-lime-400/20 bg-[#181818]">
          <div className="flex flex-col p-5 gap-5">
            <NavLink
              to="/main"
              end
              className="text-gray-300 hover:text-lime-400"
            >
              Home
            </NavLink>

            <NavLink to="shop" className="text-gray-300 hover:text-lime-400">
              Shop
            </NavLink>

            <NavLink to="about" className="text-gray-300 hover:text-lime-400">
              About
            </NavLink>

            <button className="flex items-center gap-3 text-red-400 pt-3 border-t border-lime-400/20">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
