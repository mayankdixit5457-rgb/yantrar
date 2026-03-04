import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const loggedIn = await account.createEmailPasswordSession(
          email,
          password
      );
      setUser(loggedIn);
      window.location.replace("/");
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  async function register(email, password, name) {
    try {
      await account.create(
          ID.unique(),
          email,
          password,
          name
      );
      await login(email, password);
    } catch (err) {
      console.error("Registration failed:", err);
      throw err;
    }
  }




  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
};
