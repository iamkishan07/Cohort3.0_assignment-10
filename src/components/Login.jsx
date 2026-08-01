import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const { formLogin } = useContext(Auth);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(formLogin)}
      className="
      flex
      justify-center
      items-center
      px-4
      py-6
      "
    >
      <div
        className="
        bg-white
        dark:bg-[#111111]

        border
        border-zinc-200
        dark:border-gray-800

        rounded-3xl

        w-full
        max-w-md

        p-5
        sm:p-6

        shadow-xl
        "
      >
        <h1
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-zinc-900
          dark:text-white
          "
        >
          Sign in
        </h1>

        <p
          className="
          text-zinc-500
          dark:text-gray-500
          mt-1
          mb-5
          "
        >
          Enter your credentials to continue
        </p>

        {/* Email */}

        <div
          className="
          flex
          items-center

          bg-zinc-100
          dark:bg-[#1d1d1d]

          rounded-xl

          px-4
          h-12

          mb-4

          border
          border-zinc-300
          dark:border-gray-700
          "
        >
          <Mail className="text-gray-500" size={19} />

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email address"
            className="
          bg-transparent
          outline-none
          w-full
          ml-3
          text-zinc-900
          dark:text-white
          "
          />
        </div>

        {errors.email && (
          <p className="text-red-400 text-sm mb-3">{errors.email.message}</p>
        )}

        {/* Password */}

        <div
          className="
          flex
          items-center

          bg-zinc-100
          dark:bg-[#1d1d1d]

          rounded-xl

          px-4
          h-12

          mb-5

          border
          border-zinc-300
          dark:border-gray-700
          "
        >
          <Lock className="text-gray-500" size={19} />

          <input
            {...register("password", {
              required: "Password is required",
            })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="
          bg-transparent
          outline-none
          w-full
          ml-3
          text-zinc-900
          dark:text-white
          "
          />

          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff className="text-gray-500" size={19} />
            ) : (
              <Eye className="text-gray-500" size={19} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="text-red-400 text-sm mb-3">{errors.password.message}</p>
        )}

        <button
          className="
        bg-lime-400
        hover:bg-lime-300

        text-black

        font-bold

        w-full

        rounded-xl

        h-12

        transition
        duration-300
        "
        >
          Sign in →
        </button>

        <p
          className="
        text-center

        text-zinc-500

        mt-5
        "
        >
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="
          text-lime-400
          font-semibold
          cursor-pointer
          ml-2
          hover:underline
          "
          >
            Create one
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
