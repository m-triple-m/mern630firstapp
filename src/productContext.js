import { createContext, useState } from "react";
import productData from "./components/productdata";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const getUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrentUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return {};
    }
  };

  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [loggedin, setLoggedin] = useState(getUser());

  return (
    <ProductContext.Provider
      value={{
        productData,
        loggedin,
        setLoggedin,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
