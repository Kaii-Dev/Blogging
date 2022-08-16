import { auth } from "firebase-app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState("");
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      set
    });
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
export { AuthProvider, useAuth };
