import { useAuth } from "context/Auth-context";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
   const {hand}
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //   }, []);
  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      ></form>
    </AuthenticationPage>
  );
};

export default SignInPage;
