import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
width: 300px;
height: 80px;

`
const Button = () => {
   return (
      <ButtonStyles>
         Sign up
      </ButtonStyles>
   );
};

export default Button;