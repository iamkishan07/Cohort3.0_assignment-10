import { MyStore } from "../context/ContextApi";
import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Category = () => {
  const { categoryData } = useContext(MyStore);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/main/shop", {
      state: {
        category,
      },
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
          Shop By Category
        </h2>

        <button
          onClick={() => navigate("/main/shop")}
          className="
          flex
          items-center
          gap-2

          text-lime-600
          dark:text-lime-400

          font-semibold

          hover:text-lime-500
          dark:hover:text-lime-300

          transition
          duration-300
          "
        >
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
        {categoryData.map((item) => (
          <CategoryCard
            key={item.category}
            category={item.category}
            count={item.count}
            image={item.image}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
