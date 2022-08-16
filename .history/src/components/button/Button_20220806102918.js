import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 10px;
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
`;
const Button = ({type= 'button'}) => {
  return <ButtonStyles>Sign up</ButtonStyles>;
};

export default Button;
