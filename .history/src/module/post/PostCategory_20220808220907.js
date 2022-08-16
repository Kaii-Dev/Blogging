import React from "react";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  background-color: #6b6b6b;
  /* white-space: nowrap; */
  /* overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; */
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.grayF3}; ;
    `}
`;
const PostCategory = ({
  children,
  type = "primary",
  className = "",
  ...props
}) => {
  return (
    <PostCategoryStyles type={type} className={className}>
      {children}
    </PostCategoryStyles>
  );
};

export default PostCategory;
