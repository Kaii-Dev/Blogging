import Button from "components/button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const HeaderStyles = styled.header`
  padding: 25px 0;
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }

  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  .header-button {
    margin-left: 20px;
  }
`;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <NavLink to={"/"}>
            <img srcSet="/logo.png 2x" alt="" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="search post"
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          <Button
            style={{ maxWidth: "200px" }}
            height={"56px"}
            className="header-button"
          >
            Sign up
          </Button>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
