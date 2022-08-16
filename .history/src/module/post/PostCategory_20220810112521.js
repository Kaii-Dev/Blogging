import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.gray6B};
  /* white-space: nowrap; */
  /* overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; */
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.grayF3};
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `}
`;
const PostCategory = ({
  children,
  type = "primary",
  className = "",
  to = "/",
  ...props
}) => {
  return (
    <PostCategoryStyles type={type} className={`post-category ${className}`}>
      <NavLink to={to}>


      </NavLink>
      {children}
    </PostCategoryStyles>
  );
};

export default PostCategory;
