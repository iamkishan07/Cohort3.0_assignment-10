import React, { useContext, useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

import { useNavigate, useParams } from "react-router";
import { MyStore } from "../context/ContextApi";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    productData,
    cartProducts,
    addToCart,
    wishlistProducts,
    addToWishlist,
    removeFromWishlist,
  } = useContext(MyStore);

  const [quantity, setQuantity] = useState(1);

  const product = productData.find((item) => item.id == id);

  if (!product) return null;

  const liked = wishlistProducts.some((item) => item.id === product.id);

  const isInCart = cartProducts.some((item) => item.id === product.id);

  const currentIndex = productData.findIndex((item) => item.id == id);

  const previousProduct =
    currentIndex > 0 ? productData[currentIndex - 1] : null;

  const nextProduct =
    currentIndex < productData.length - 1
      ? productData[currentIndex + 1]
      : null;

  const suggestedProducts = productData
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div
      className="
min-h-screen
bg-[#111111]
text-white
py-6
sm:py-10
px-4
sm:px-6
lg:px-10
"
    >
      <div
        className="
max-w-7xl
mx-auto
grid
grid-cols-1
lg:grid-cols-2
gap-8
lg:gap-10
"
      >
        {/* LEFT IMAGE SECTION */}

        <div>
          <div
            className="
bg-[#1a1a1a]
rounded-2xl
p-5
sm:p-8
flex
justify-center
items-center
"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="
w-full
max-w-sm
h-64
sm:h-80
object-contain
"
            />
          </div>

          {/* Gallery */}

          <div
            className="
grid
grid-cols-4
gap-3
mt-5
"
          >
            {product.images?.map((image, index) => (
              <div
                key={index}
                className="
aspect-square
bg-[#1a1a1a]
rounded-xl
p-2
cursor-pointer
border
border-transparent
hover:border-lime-400
transition
"
              >
                <img
                  src={image}
                  alt={product.title}
                  className="
w-full
h-full
object-cover
rounded-lg
"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div>
          <span
            className="
inline-block
bg-lime-400/20
text-lime-400
px-3
py-1.5
rounded-full
text-xs
"
          >
            {product.category}
          </span>

          <h1
            className="
text-2xl
sm:text-3xl
lg:text-4xl
font-bold
mt-4
leading-snug
"
          >
            {product.title}
          </h1>

          {/* Rating */}

          <div
            className="
flex
items-center
gap-2
mt-4
"
          >
            <div
              className="
flex
text-lime-400
"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} size={17} />
              ))}
            </div>

            <span
              className="
text-gray-400
text-sm
"
            >
              ({product.rating})
            </span>
          </div>

          {/* Price */}

          <h2
            className="
text-lime-400
text-3xl
sm:text-4xl
font-bold
mt-5
"
          >
            ${product.price}
          </h2>

          <p
            className="
text-gray-400
text-sm
sm:text-base
leading-7
mt-5
max-w-xl
"
          >
            {product.description}
          </p>

          {/* Quantity */}

          <div
            className="
flex
items-center
gap-3
mt-6
bg-[#1a1a1a]
w-fit
p-2
rounded-xl
border
border-zinc-800
"
          >
            <button
              onClick={decreaseQuantity}
              className="
w-10
h-10
rounded-lg
border
border-zinc-700
flex
items-center
justify-center
hover:border-lime-400
transition
"
            >
              <FiMinus />
            </button>

            <span
              className="
text-lg
font-semibold
px-2
"
            >
              {quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="
w-10
h-10
rounded-lg
border
border-zinc-700
flex
items-center
justify-center
hover:border-lime-400
transition
"
            >
              <FiPlus />
            </button>
          </div>

          {/* BUTTONS */}

          <div
            className="
flex
gap-3
mt-6
"
          >
            <button
              onClick={() => {
                if (!isInCart) {
                  addToCart(product, quantity);
                }
              }}
              disabled={isInCart}
              className={`
flex-1
h-12
rounded-xl
font-semibold
flex
items-center
justify-center
gap-2
transition

${isInCart ? "bg-green-500" : "bg-lime-400 text-black hover:bg-lime-300"}

`}
            >
              <FiShoppingCart />

              {isInCart ? "Added ✓" : "Add To Cart"}
            </button>

            <button
              onClick={() => {
                if (liked) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                }
              }}
              className={`
w-12
rounded-xl
flex
items-center
justify-center
border
transition

${
  liked
    ? "border-red-500 text-red-500 bg-red-500/10"
    : "border-zinc-700 hover:border-lime-400"
}

`}
            >
              <FiHeart size={22} fill={liked ? "currentColor" : "none"} />
            </button>
          </div>

          {/* PRODUCT INFO */}

          <div
            className="
        mt-8
        border-t
        border-zinc-800
        pt-6
        space-y-4
        "
          >
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Brand</span>

              <span className="text-right">{product.brand}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Category</span>

              <span className="text-right">{product.category}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Availability</span>

              <span
                className="
          text-green-400
          text-right
          "
              >
                {product.availabilityStatus}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Free Shipping</span>

              <span>Yes</span>
            </div>
          </div>

          {/* PREVIOUS NEXT */}

          <div
            className="
      flex
      justify-between
      mt-8
      gap-3
      "
          >
            {previousProduct ? (
              <button
                onClick={() => navigate(`/main/product/${previousProduct.id}`)}
                className="
        px-5
        py-2.5
        rounded-xl
        border
        border-zinc-700
        text-sm
        hover:border-lime-400
        hover:text-lime-400
        transition
        "
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}

            {nextProduct && (
              <button
                onClick={() => navigate(`/main/product/${nextProduct.id}`)}
                className="
        px-5
        py-2.5
        rounded-xl
        border
        border-zinc-700
        text-sm
        hover:border-lime-400
        hover:text-lime-400
        transition
        "
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}

      <div
        className="
max-w-7xl
mx-auto
mt-16
sm:mt-20
"
      >
        <h2
          className="
text-2xl
sm:text-3xl
font-bold
mb-6
"
        >
          Related Products
        </h2>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
"
        >
          {suggestedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/main/product/${item.id}`)}
              className="
bg-[#1a1a1a]
rounded-2xl
p-4
cursor-pointer
border
border-transparent
hover:border-lime-400
transition
group
"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="
w-full
h-44
object-contain
group-hover:scale-105
transition
duration-300
"
              />

              <h3
                className="
mt-4
font-semibold
text-sm
line-clamp-2
"
              >
                {item.title}
              </h3>

              <div
                className="
flex
justify-between
items-center
mt-4
"
              >
                <span
                  className="
text-lime-400
text-lg
font-bold
"
                >
                  ${item.price}
                </span>

                <span
                  className="
text-gray-400
text-sm
"
                >
                  ⭐ {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
