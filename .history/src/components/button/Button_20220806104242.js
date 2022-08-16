import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 10px;
  height: ${props => props.height || '70px'};
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
