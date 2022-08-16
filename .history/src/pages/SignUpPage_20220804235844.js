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
    /* align-items: flex-start; */
    row-gap: 20px;
    .label {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      color: ${(props) => props.theme.grayDark};
    }
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form>
          <div className="field">
            <label htmlFor="label" className="label">
              Fullname
            </label>
            <input
              type="text"
              className="input"
              placeholder="Please enter your fullname"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
