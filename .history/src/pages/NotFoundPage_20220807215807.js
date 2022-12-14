import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPageStyles = styled.div`
height: 100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const NotFoundPage = () => {
   return (
      <NotFoundPageStyles>
         <NavLink to={"/"} className={"logo"}>
            <img srcSet="/logo.png 2x" alt="" />
         </NavLink>
         <h1 className="heading">Oops! Page not found 😥</h1>
      </NotFoundPageStyles>
   );
};

export default NotFoundPage;