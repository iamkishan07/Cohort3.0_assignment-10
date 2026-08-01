import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );

  const formSubmit = (data) => {
    console.log(data);

    const arr = [...registeredUsers, data];

    setRegisteredUsers(arr);

    localStorage.setItem("registeredUser", JSON.stringify(arr));

    toast.success("Account Created Successfully");
  };

  const formLogin = (data) => {
    const user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("Unauthorized User");

      return;
    }

    setLoggedInUser(user);

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    toast.success("You are Logged In");
  };

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,

        loggedInUser,
        setLoggedInUser,

        formSubmit,
        formLogin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
