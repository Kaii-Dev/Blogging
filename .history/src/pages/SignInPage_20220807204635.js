import Field from "components/field/Field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "context/Auth-context";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //   }, []);
  const handleSignIn = (values) => {};
  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >

         <Field>
            <Label htmlFor="email">Email address</Label>
            <Input>Enter your email address</Input>
         </Field>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
