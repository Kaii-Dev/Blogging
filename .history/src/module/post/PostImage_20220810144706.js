import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
const PostImage = ({ className = "", url = "", alt = "", to = "" }) => {
  if (to) return <NavLink to={to}></NavLink>;
  return (
    
  );
};

export default PostImage;
