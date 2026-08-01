import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

  const [productData, setProductData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistProducts, setWishlistProducts] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistProducts");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
  }, [wishlistProducts]);

  const getProductData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=50");

      setProductData(res.data.products);
    } catch (error) {
      console.log("Error in API:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product, quantity = 1) => {
    setCartProducts((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,

                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...prev,

        {
          ...product,

          quantity,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev

        .map((item) =>
          item.id === id
            ? {
                ...item,

                quantity: item.quantity - 1,
              }
            : item,
        )

        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
  setCartProducts([]);
};

  const addToWishlist = (product) => {
    setWishlistProducts((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartProducts.reduce(
    (acc, val) => {
      return acc + val.price * val.quantity;
    },

    0,
  );

  const categoryData = Object.values(
    productData.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          category: product.category,

          count: 0,

          image: product.thumbnail,
        };
      }

      acc[product.category].count++;

      return acc;
    }, {}),
  );

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        cartProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalPrice,
        categoryData,
        wishlistProducts,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
