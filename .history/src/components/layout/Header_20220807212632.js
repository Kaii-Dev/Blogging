import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;
const menuLinks = [
  {
    url: "/#",
    title: 'Home'
  },
  {
    url: "/#",
    title: 'Blog'
  },
  {
    url: "/#",
    title: 'Contact'
  },
]
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="/logo.png 2x" alt="" />
          </a>
          <ul className="menu">
            {menuLinks.map(item )}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
