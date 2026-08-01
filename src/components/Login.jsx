import { Mail, Lock, Eye } from "lucide-react";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();

  let {
    loggedInUser,
    setLoggedInUser,
    registeredUsers,
    setRegisteredUsers,
    formLogin,
  } = useContext(Auth);

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(formLogin)}
      className="flex justify-center items-center p-10"
    >
      <div className="bg-[#111111] border border-gray-800 rounded-3xl w-full max-w-md p-10 shadow-2xl">
        <h1 className="text-5xl font-bold">Sign in</h1>

        <p className="text-gray-500 mt-2 mb-8">
          Enter your credentials to continue
        </p>

        {/* Email */}

        <div className="flex items-center bg-[#1d1d1d] rounded-xl px-4 py-4 mb-5 border border-gray-700">
          <Mail className="text-gray-500" size={20} />

          <input
            {...register("email", {
              required: "email is required",
            })}
            type="email"
            placeholder="Email address"
            className="bg-transparent outline-none w-full ml-3"
          />
        </div>

        {/* Password */}

        <div className="flex items-center bg-[#1d1d1d] rounded-xl px-4 py-4 mb-8 border border-gray-700">
          <Lock className="text-gray-500" size={20} />

          <input
            {...register("password", {
              required: "password is required",
            })}
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full ml-3"
          />

          <Eye className="text-gray-500" />
        </div>

        <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-xl w-full rounded-xl py-4 transition duration-300">
          Sign in →
        </button>

        <p className="text-center text-gray-500 mt-8">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-lime-400 font-semibold cursor-pointer ml-2"
          >
            Create one
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
