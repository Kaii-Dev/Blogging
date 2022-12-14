import React from "react";
import styled from "styled-components";

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
    
    .input {
      width: 100%;
      padding: 20px;
      background-color: ${(props) => props.theme.grayLight};
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.2 linear;
      border: 1px solid transparent;
    }

    .input:focus {
      background-color: white;
      border-color: ${(props) => props.theme.primary};
    }
    input::-webkit-input-placeholder {
      color: #84878b;
    }
    input::-moz-input-placeholder {
      color: #84878b;
    }
    .form {
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>

        <form className="form">
          <div className="field">
            <label htmlFor="fullname" className="label">
              Fullname
            </label>
            <input
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
