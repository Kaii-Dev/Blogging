import React from "react";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-style: 18px;
    `};
    ${props => props.size=== "big" && css`::after`};
`;
const PostTitle = ({ className = "", children, size = "normal" }) => {
  return (
    <PostTitleStyles className={className} size={size}>
      {" "}
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
