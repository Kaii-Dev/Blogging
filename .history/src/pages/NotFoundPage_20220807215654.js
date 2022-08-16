import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPageStyles = styled.div`

`
const NotFoundPage = () => {
   return (
      <NotFoundPageStyles>
         <NavLink to={"/"}>
            <img srcSet="/log" alt="" />
         </NavLink>
      </NotFoundPageStyles>
   );
};

export default NotFoundPage;