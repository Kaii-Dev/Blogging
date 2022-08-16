import { Label } from "components/label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { IconEyeClose } from "components/icon";
import Field from "components/field/Field";

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

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
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
              email
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
              password
            </Label>
            <Input
              name="password"
              type="text"
              placeholder="Enter your full name"
              control={control}
              hasIcon
            />
          </Field>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
