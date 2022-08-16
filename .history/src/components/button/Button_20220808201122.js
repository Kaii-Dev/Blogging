import { LoadingSpinner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * @param {*} onClick handler onClick
 * @requires
 * @param {string} type Type of button "button" | "submit"
 */

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "ghost" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: rgba(29, 192, 113, 0.1);
    `};
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
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children; //convert sang boolean
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <ButtonStyles type={type} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} {...props}>
      {child}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
