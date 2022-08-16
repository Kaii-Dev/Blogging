import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 1px;
  background: linear-gradient(107.61deg, #00a7b4 15.59%, #a4d96c 87.25%);
  border-radius: 8px;
  color: white;
`;
const Button = () => {
  return <ButtonStyles>Sign up</ButtonStyles>;
};

export default Button;
