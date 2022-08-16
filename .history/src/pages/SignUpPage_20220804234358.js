import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo{
   margin: 0
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo"/>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
