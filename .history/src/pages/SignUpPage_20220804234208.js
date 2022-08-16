import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height:100vh;
  padding: 40px;
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="blogging" />
    </SignUpPageStyles>
  );
};

export default SignUpPage;
