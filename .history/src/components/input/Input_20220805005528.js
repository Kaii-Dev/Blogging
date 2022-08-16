import { IconEyeOpen } from "components/icon";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: ${(props) => props.theme.grayLight};
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.2s linear;
    /* color: ${(props) => props.theme.black}; */
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }
  .icon-eye
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={hasIcon}>
      <input id={name} type={type} {...field} {...props}></input>
      {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
    </InputStyles>
  );
};

export default Input;
