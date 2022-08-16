import Button from "components/button/Button";
import Field from "components/field/Field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "context/Auth-context";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const schema = yup.object({
  fullname: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .required("please enter your email address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters")
    .required("please enter your password"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver()
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
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password address"
            control={control}
          ></Input>
        </Field>

        <Button
          type="submit"
          style={{
            maxWidth: 300,
            margin: "0 auto",
          }}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Sign up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
