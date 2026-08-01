import React from "react";

const CategoryCard = ({ category, count, image, onClick }) => {
  return (
    <div
      onClick={() => onClick(category)}
      className="
      group

      bg-white
      dark:bg-[#181818]

      border
      border-zinc-200
      dark:border-white/10

      rounded-3xl

      p-4
      sm:p-5
      lg:p-6

      text-center

      hover:border-lime-400

      transition
      duration-300

      cursor-pointer

      shadow-sm
      dark:shadow-none
      "
    >
      <div
        className="
        w-14
        h-14

        sm:w-16
        sm:h-16

        mx-auto

        rounded-2xl

        bg-lime-400/10

        flex
        items-center
        justify-center

        overflow-hidden

        group-hover:bg-lime-400

        transition
        duration-300
        "
      >
        <img
          src={image}
          alt={category}
          className="
          w-full
          h-full

          object-cover

          rounded-2xl

          group-hover:scale-105

          transition
          duration-300
          "
        />
      </div>

      <h3
        className="
        mt-4
        sm:mt-5

        text-zinc-900
        dark:text-white

        font-semibold

        text-base
        sm:text-lg

        capitalize

        line-clamp-1
        "
      >
        {category}
      </h3>

      <p
        className="
        mt-2

        text-xs
        sm:text-sm

        text-zinc-500
        dark:text-gray-400
        "
      >
        {count} Products
      </p>
    </div>
  );
};

export default CategoryCard;
