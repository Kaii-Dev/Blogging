import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div``;

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
  return <InputStyles>
   <input id={name} type={type} {...field} {...props}></input>
   {hasIcon}
  </InputStyles>;
};

export default Input;
