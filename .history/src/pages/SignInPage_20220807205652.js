import Button from "components/button/Button";
import Field from "components/field/Field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "context/Auth-context";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";

const schema = yup.object({
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
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //   }, []);
  const handleSignIn = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  };
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
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password address"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
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
