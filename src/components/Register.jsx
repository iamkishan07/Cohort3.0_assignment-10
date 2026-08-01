import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";

import { useContext, useState } from "react";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
  const { formSubmit } = useContext(Auth);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch("password");

  const checkPasswordStrength = (value) => {
    if (!value) {
      setPasswordStrength("");
      return;
    }

    const strong =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strong.test(value)) {
      setPasswordStrength("Strong");
    } else if (medium.test(value)) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-zinc-100
      dark:bg-[#0b0b0b]
      flex
      items-center
      justify-center
      px-4
      py-5
      overflow-y-auto
      transition-colors
      "
    >
      <div className="w-full max-w-md">
        {/* Logo */}

        <div
          className="
          flex
          justify-center
          items-center
          gap-3
          mb-4
          "
        >
          <div
            className="
            w-11
            h-11
            rounded-xl
            bg-lime-400
            flex
            items-center
            justify-center
            "
          >
            <Zap size={22} className="text-black" />
          </div>

          <h1
            className="
            text-3xl
            font-bold
            text-zinc-900
            dark:text-white
            "
          >
            Sky
            <span className="text-lime-500 dark:text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Form Card */}

        <form
          onSubmit={handleSubmit((data) => {
            formSubmit(data);

            reset();

            navigate("/");
          })}
          className="
          bg-white
          dark:bg-[#121212]
          border
          border-zinc-200
          dark:border-[#2c2c2c]
          rounded-3xl
          shadow-xl
          p-5
          sm:p-6
          "
        >
          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-zinc-900
            dark:text-white
            "
          >
            Create account
          </h2>

          <p
            className="
            text-zinc-500
            dark:text-gray-500
            mt-1
            mb-5
            "
          >
            Join SkyMart and start shopping
          </p>

          {/* Name */}

          <div className="relative mb-3">
            <User
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
              "
            />

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full name"
              className="
              w-full
              h-12
              bg-zinc-100
              dark:bg-[#1d1d1d]
              border
              border-zinc-300
              dark:border-[#333]
              rounded-xl
              pl-12
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-lime-400
              "
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}

          <div className="relative mb-3">
            <Mail
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
              "
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email address"
              className="
              w-full
              h-12
              bg-zinc-100
              dark:bg-[#1d1d1d]
              border
              border-zinc-300
              dark:border-[#333]
              rounded-xl
              pl-12
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-lime-400
              "
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="relative mb-3">
            <Lock
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
              "
            />

            <input
              {...register("password", {
                required: "Password is required",

                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                  message:
                    "Min 8 chars, uppercase, lowercase, number & special character required",
                },

                onChange: (e) => checkPasswordStrength(e.target.value),
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="
              w-full
              h-12
              bg-zinc-100
              dark:bg-[#1d1d1d]
              border
              border-zinc-300
              dark:border-[#333]
              rounded-xl
              pl-12
              pr-12
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-lime-400
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
              "
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Strength */}

          {password && (
            <div className="mb-3">
              <div
                className="
                h-1.5
                bg-zinc-300
                dark:bg-gray-700
                rounded-full
                overflow-hidden
                "
              >
                <div
                  className={`
                  h-full
                  transition-all
                  ${passwordStrength === "Weak" && "w-1/3 bg-red-500"}
                  ${passwordStrength === "Medium" && "w-2/3 bg-yellow-400"}
                  ${passwordStrength === "Strong" && "w-full bg-green-400"}
                  `}
                />
              </div>

              <p
                className={`
                text-xs
                mt-1
                ${passwordStrength === "Weak" && "text-red-400"}
                ${passwordStrength === "Medium" && "text-yellow-400"}
                ${passwordStrength === "Strong" && "text-green-400"}

                `}
              >
                Password strength : {passwordStrength}
              </p>
            </div>
          )}

          {/* Confirm Password */}

          <div className="relative mb-5">
            <Lock
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-400
              "
            />

            <input
              {...register("confirmpassword", {
                required: "Confirm password is required",

                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm password"
              className="
              w-full
              h-12
              bg-zinc-100
              dark:bg-[#1d1d1d]
              border
              border-zinc-300
              dark:border-[#333]
              rounded-xl
              pl-12
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-lime-400

              "
            />

            {errors.confirmpassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            className="
            w-full
            h-12
            rounded-xl
            bg-lime-400
            hover:bg-lime-300
            text-black
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition

            "
          >
            Create Account
            <ArrowRight size={20} />
          </button>

          {/* Login */}

          <p
            className="
            text-center
            text-zinc-500
            text-sm
            mt-5
            "
          >
            Already have an account?
            <span
              onClick={() => navigate("/")}
              className="
              text-lime-500
              dark:text-lime-400
              ml-2
              cursor-pointer
              hover:underline
              "
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
