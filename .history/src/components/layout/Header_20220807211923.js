import React from 'react';
import styled from "styled-components";

const HeaderStyles = styled.Header`


`
const Header = () => {
   return (
      <HeaderStyles>
         <a href="/">

            <img srcSet='/public/logo.png ' alt="" />
         </a>
      </HeaderStyles>
   );
};

export default Header;