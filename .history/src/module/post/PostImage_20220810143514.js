import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div``;
const PostImage = ({ className = "", url="", alt="" }) => {
  return <PostImageStyles className={className}>
   <img src={url} alt={alt} lazi />
  </PostImageStyles>;
};

export default PostImage;
