import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3`
fw`;
const PostTitle = ({ className, children }) => {
  return <PostTitleStyles className={className}> {children}</PostTitleStyles>;
};

export default PostTitle;