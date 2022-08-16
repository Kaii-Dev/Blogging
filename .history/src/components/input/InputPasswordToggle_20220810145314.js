import React from "react";

const InputPasswordToggle = () => {
  return <div>
   <Input
            name="password"
            type={togglePassword ? "text" : "password"}
            placeholder="Enter your password"
            control={control}
            hasIcon
          >
            {!togglePassword ? (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
  </div>;
};

export default InputPasswordToggle;
