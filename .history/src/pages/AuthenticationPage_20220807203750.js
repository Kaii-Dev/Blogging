import React from "react";
import styled from "styled-components";

const AuthenticationStyles = styled.div``;
const AuthenticationPage = () => {
  return (
    <AuthenticationStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
    </AuthenticationStyles>
  );
};

export default AuthenticationPage;
