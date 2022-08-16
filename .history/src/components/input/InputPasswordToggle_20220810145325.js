import React from "react";
import Input from "./Input";

const InputPasswordToggle = () => {
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
