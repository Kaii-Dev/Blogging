import { Label } from "components/label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import Field from "components/field/Field";
import { useState } from "react";
import Button from "components/button/Button";
import { LoadingSpinner } from "components/loading";
import { resolvePath } from "react-router-dom";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const schema = yup.Object({
fullname: yup.string("Please enter your full name"),
email:yup.string("please enter your email address").required()
})
const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const handleSignUp = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
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
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
