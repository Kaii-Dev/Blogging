import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div``;
const PostImage = ({ className = "" }) => {
  return <PostImageStyles className={className}></PostImageStyles>;
};

export default PostImage;
