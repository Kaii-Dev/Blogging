import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.;
`;
const PostTitle = ({ className, children }) => {
  return <PostTitleStyles className={className}> {children}</PostTitleStyles>;
};

export default PostTitle;
