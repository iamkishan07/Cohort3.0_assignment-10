import React from "react";
import LoginSection from "../components/LoginSection";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-[#0b0b0b] text-zinc-900 dark:text-white grid lg:grid-cols-2 transition-colors">
      <LoginSection />
      <Login />
    </div>
  );
};

export default LoginPage;