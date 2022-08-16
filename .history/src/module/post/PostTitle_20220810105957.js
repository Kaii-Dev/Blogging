import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3``;
const PostTitle = ({className}) => {
  return <PostTitleStyles className={className}> {children}</PostTitleStyles>;
};

export default PostTitle;
