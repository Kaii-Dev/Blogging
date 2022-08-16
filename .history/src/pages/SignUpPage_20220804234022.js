import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
background-color: ${props => props.};
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="blogging" />
    </SignUpPageStyles>
  );
};

export default SignUpPage;
