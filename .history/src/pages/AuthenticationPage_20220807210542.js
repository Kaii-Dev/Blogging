import React from "react";
import styled from "styled-components";

const AuthenticationStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account{
    margin-bottom: 20px ;
    a{
      display: inline-block ;
      color: 
    }
  }
`;
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenticationStyles>
  );
};

export default AuthenticationPage;
