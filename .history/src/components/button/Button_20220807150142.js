import { LoadingSpinner } from "components/loading";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @param {string} type Type of button "button"
 * @returns
 */
const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 10px;
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;
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
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children; //convert sang boolean
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Button;
