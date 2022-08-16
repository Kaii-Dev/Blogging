import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
width: 300px;
height: 80px;
background: linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%);

`
const Button = () => {
   return (
      <ButtonStyles>
         Sign up
      </ButtonStyles>
   );
};

export default Button;