import { ChangeEvent, useState, useCallback } from "react";

export const useInput = (validationFunction: any) => {
  const [value, setValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const invalidValue = validationFunction(value);
  const invalidInput = invalidValue && isConfirmed;

  const changeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const blurInput = useCallback((e: any) => {
    setIsConfirmed(true);
  }, []);

  const resetInput = useCallback(() => {
    setValue("");
    setIsConfirmed(false);
  }, []);

  return [value, invalidInput, changeInput, blurInput, resetInput, setValue];
};
