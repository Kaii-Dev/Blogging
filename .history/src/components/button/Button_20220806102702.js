import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 1px;
  background: linear-gradient(to right bottom,
   ${props => props.theme.primary};
   );
  border-radius: 8px;
  color: white;
`;
const Button = () => {
  return <ButtonStyles>Sign up</ButtonStyles>;
};

export default Button;
