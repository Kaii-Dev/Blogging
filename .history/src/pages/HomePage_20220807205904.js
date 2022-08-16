import { signOut } from "firebase/auth";
import React from "react";

const HomePage = () => {
   const handleSignOut = () =>{
      signOut(auth)
   }
  return <div>
   <button>Sign out</button>
  </div>;
};

export default HomePage;
