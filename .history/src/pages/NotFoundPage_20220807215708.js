import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPageStyles = styled.div`

`
const NotFoundPage = () => {
   return (
      <NotFoundPageStyles>
         <NavLink to={"/"} className={"log"}>
            <img srcSet="/logo.png 2x" alt="" />
         </NavLink>
      </NotFoundPageStyles>
   );
};

export default NotFoundPage;