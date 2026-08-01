import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, LogOut, ShoppingBag, Menu, X } from "lucide-react";

import { MyStore } from "../context/ContextApi";
import { Auth } from "../context/AuthContext";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const { setIsCartOpen, cartProducts } = useContext(MyStore);
  const { loggedInUser, setLoggedInUser } = useContext(Auth);

  const [isOpen, setIsOpen] = useState(false);

  const noOfCartItems = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white/90
      dark:bg-[#181818]/90
      backdrop-blur-xl
      border-b
      border-zinc-200
      dark:border-lime-400/20
      transition-colors
    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-11 w-11 rounded-xl bg-lime-400 flex items-center justify-center">
            <ShoppingBag className="text-black" size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lime-500 dark:text-lime-400">
              SkyMart
            </h2>

            <p className="text-xs tracking-[3px] text-zinc-500 dark:text-zinc-400">
              SHOP SMART
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            end
            to="/main"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-lime-500 dark:text-lime-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="shop"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-lime-500 dark:text-lime-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-lime-500 dark:text-lime-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeButton />

          {/* User */}
          <div
            className="
            flex items-center gap-3
            px-3 py-2 rounded-full
            bg-white
            dark:bg-[#202020]
            border
            border-zinc-200
            dark:border-lime-400/20
            shadow-sm
            dark:shadow-none
            hover:border-lime-400
            transition
          "
          >
            <div className="h-10 w-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">
              {loggedInUser?.name?.charAt(0).toUpperCase() || "G"}
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {loggedInUser?.name || "Guest"}
              </p>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Welcome Back
              </p>
            </div>
          </div>
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="
              relative
              h-11 w-11
              rounded-xl
              bg-white
              dark:bg-[#202020]
              border
              border-zinc-200
              dark:border-lime-400/20
              shadow-sm
              dark:shadow-none
              flex
              items-center
              justify-center
              hover:border-lime-400
              transition
            "
          >
            <ShoppingCart
              className="text-lime-500 dark:text-lime-400"
              size={20}
            />

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
            className="
              h-11 w-11
              rounded-xl
              bg-white
              dark:bg-[#202020]
              border
              border-zinc-200
              dark:border-lime-400/20
              shadow-sm
              dark:shadow-none
              flex
              items-center
              justify-center
              hover:border-red-500
              transition
            "
          >
            <LogOut className="text-red-500" size={20} />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeButton />

          <button
            onClick={() => setIsCartOpen(true)}
            className="
              relative
              h-10 w-10
              rounded-lg
              bg-white
              dark:bg-[#202020]
              border
              border-zinc-200
              dark:border-lime-400/20
              flex
              items-center
              justify-center
              transition
            "
          >
            <ShoppingCart
              size={18}
              className="text-lime-500 dark:text-lime-400"
            />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              {noOfCartItems}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              h-10 w-10
              rounded-lg
              bg-white
              dark:bg-[#202020]
              border
              border-zinc-200
              dark:border-lime-400/20
              flex
              items-center
              justify-center
              transition
            "
          >
            {isOpen ? (
              <X className="text-zinc-900 dark:text-white" size={20} />
            ) : (
              <Menu className="text-zinc-900 dark:text-white" size={20} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-white
            dark:bg-[#181818]
            border-t
            border-zinc-200
            dark:border-lime-400/20
            transition-colors
          "
        >
          <div className="p-5">
            {/* User */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-lg">
                {loggedInUser?.name?.charAt(0).toUpperCase() || "G"}
              </div>

              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">
                  {loggedInUser?.name || "Guest"}
                </p>

                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Welcome Back
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">
              <NavLink
                to="/main"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-lime-500 dark:text-lime-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="shop"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-lime-500 dark:text-lime-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
                  }`
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-lime-500 dark:text-lime-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400"
                  }`
                }
              >
                About
              </NavLink>

              {/* Cart */}
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-between
                  pt-5
                  border-t
                  border-zinc-200
                  dark:border-lime-400/20
                  text-zinc-700
                  dark:text-zinc-300
                  hover:text-lime-500
                  dark:hover:text-lime-400
                  transition
                "
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart size={18} />
                  <span>My Cart</span>
                </div>

                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {noOfCartItems}
                </span>
              </button>

              {/* Logout */}
              <button
                onClick={() => {
                  setLoggedInUser(null);
                  localStorage.removeItem("loggedInUser");
                  setIsOpen(false);
                }}
                className="
                  flex
                  items-center
                  gap-3
                  pt-5
                  border-t
                  border-zinc-200
                  dark:border-lime-400/20
                  text-red-500
                  hover:text-red-600
                  transition
                "
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
