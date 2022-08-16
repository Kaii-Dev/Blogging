import { IconEyeClose, IconEyeOpen } from "components/icon";
import React, { useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <>
      <Input
        name="password"
        type={togglePassword ? "text" : "password"}
        placeholder="Enter your password"
        control={control}
        hasIcon
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;
