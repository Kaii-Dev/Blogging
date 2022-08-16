import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 300px;
  height: 80px;
  background: linear-gradient(107.61deg, #00a7b4 15.59%, #a4d96c 87.25%);
  border-radius: 8px;
`;
const Button = () => {
  return <ButtonStyles>Sign up</ButtonStyles>;
};

export default Button;
