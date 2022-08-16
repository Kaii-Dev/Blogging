import { Label } from "components/label";
import React from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form"
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
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;

    .form {
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const SignUpPage = () => {
   const
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>

        <form className="form">
          <div className="field">
            <Label htmlFor="fullname" className="label">
              Fullname
            </Label>
            <Input
              id="fullname"
              type="text"
              className="input"
              placeholder="Enter your full name"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
