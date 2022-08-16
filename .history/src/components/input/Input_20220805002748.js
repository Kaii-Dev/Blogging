import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
   const {field} = useController({
      
   })
  return <div></div>;
};

export default Input;
