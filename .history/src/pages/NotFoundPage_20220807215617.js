import React from 'react';
import styled from 'styled-components';

const NotFoundPageStyles = styled.div`

`
const NotFoundPage = () => {
   return (
      <NotFoundPageStyles>
         <NavLink to={"/"}></NavLink>
      </NotFoundPageStyles>
   );
};

export default NotFoundPage;