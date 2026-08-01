import React from "react";
import {
  Store,
  Package,
  Users,
  Star,
  Truck,
} from "lucide-react";

const Review = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 py-10 sm:py-16">

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">


        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">


          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-3 bg-lime-400 text-black px-4 py-2 rounded-full font-semibold text-sm sm:text-base mb-5 sm:mb-6">

              <Store size={18} />

              About SkyMart

            </div>



            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

              Shopping Made

              <span className="text-lime-400">
                {" "}Simple.
              </span>

            </h1>



            <p className="text-gray-400 mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8">

              SkyMart is built for people who want a fast, secure,
              and premium shopping experience. We carefully select
              quality products and deliver them with speed and trust.

            </p>


          </div>




          {/* Right */}
          <div className="bg-[#111111] rounded-3xl p-5 sm:p-8 border border-gray-800 shadow-xl">


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">


              <div className="bg-[#1b1b1b] rounded-2xl p-5 sm:p-6 text-center hover:border-lime-400 border border-transparent transition">

                <Package
                  className="mx-auto text-lime-400 mb-4"
                  size={32}
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  20K+
                </h2>

                <p className="text-gray-400 mt-2">
                  Products
                </p>

              </div>



              <div className="bg-[#1b1b1b] rounded-2xl p-5 sm:p-6 text-center hover:border-lime-400 border border-transparent transition">

                <Users
                  className="mx-auto text-lime-400 mb-4"
                  size={32}
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  50K+
                </h2>

                <p className="text-gray-400 mt-2">
                  Happy Customers
                </p>

              </div>




              <div className="bg-[#1b1b1b] rounded-2xl p-5 sm:p-6 text-center hover:border-lime-400 border border-transparent transition">

                <Star
                  className="mx-auto text-yellow-400 mb-4"
                  size={32}
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  4.9
                </h2>

                <p className="text-gray-400 mt-2">
                  Average Rating
                </p>

              </div>




              <div className="bg-[#1b1b1b] rounded-2xl p-5 sm:p-6 text-center hover:border-lime-400 border border-transparent transition">

                <Truck
                  className="mx-auto text-lime-400 mb-4"
                  size={32}
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  98%
                </h2>

                <p className="text-gray-400 mt-2">
                  On-Time Delivery
                </p>

              </div>


            </div>


          </div>


        </div>





        {/* Story Section */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-5 sm:p-8 lg:p-10">


          <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
            Our Story
          </h2>



          <p className="text-gray-400 leading-7 sm:leading-8 text-base sm:text-lg">

            SkyMart started in 2022 as a small side project by two
            engineers who were frustrated with slow and cluttered
            e-commerce websites. Our vision was simple: create an
            online shopping experience that is fast, modern, and
            enjoyable.

            <br />
            <br />

            Today, SkyMart proudly serves more than

            <span className="text-lime-400 font-semibold">
              {" "}50,000 customers
            </span>

            {" "}across the country. We offer premium electronics,
            fashion, jewelry, furniture, and everyday essentials at
            competitive prices.

            <br />
            <br />

            We continue to focus on quality, transparency, and
            customer satisfaction. Every order is backed by secure
            payments, quick delivery, and dedicated support because
            your trust is our greatest achievement.

          </p>


        </div>


      </div>

    </section>
  );
};

export default Review;