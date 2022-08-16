import { Label } from "components/label";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import Field from "components/field/Field";
import { useState } from "react";
import Button from "components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { AuthenticationPage } from "./AuthenticationPage";

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

const SignUpPage = () => {
  const navigate = useNavigate(); //redirect
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });

    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully 👏 ");
    navigate("/");
  };

  const [togglePassword, setTogglePassword] = useState(false);
  //sử dụng toastify
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field className="field">
          <Label htmlFor="fullname" className="label">
            Fullname
          </Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your full name"
            control={control}
            hasIcon
          />
        </Field>

        <Field className="field">
          <Label htmlFor="email" className="label">
            Email
          </Label>
          <Input
            name="email"
            type="text"
            placeholder="Enter your email"
            control={control}
            hasIcon
          />
        </Field>

        <Field className="field">
          <Label htmlFor="password" className="label">
            Password
          </Label>
          <Input
            name="password"
            type={togglePassword ? "text" : "password"}
            placeholder="Enter your password"
            control={control}
            hasIcon
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

export default SignUpPage;
