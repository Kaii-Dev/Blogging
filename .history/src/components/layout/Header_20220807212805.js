import React from "react";
import styled from "styled-components";

const menuLinks = [
  {
    url: "/#",
    title: "Home",
  },
  {
    url: "/#",
    title: "Blog",
  },
  {
    url: "/#",
    title: "Contact",
  },
];
const HeaderStyles = styled.header``;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="/logo.png 2x" alt="" />
          </a>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <a href={item.url} className="menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
