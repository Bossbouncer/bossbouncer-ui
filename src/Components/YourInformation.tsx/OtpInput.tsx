import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const OtpInput = () => {
  const [value, setValue] = React.useState<string>("");
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleComplete = (finalValue: string) => {
    fetch("...");
  };
  return (
    <MuiOtpInput
      value={value}
      onChange={handleChange}
      onComplete={handleComplete}
      length={4}
      autoFocus
      validateChar={(character: string, index: number) => true}
    />
  );
};

export default OtpInput;
