import { Label } from "components/label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { IconEyeClose } from "components/icon";

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
          <Fi className="field">
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
          </Fi>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
