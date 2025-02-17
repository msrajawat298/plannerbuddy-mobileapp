import { useState } from 'react';

const useInput = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    setError(null);
  };

  const handleBlur = () => {
    const validationError = validationFunction(value);
    setError(validationError);
  };
  const reset = () => {
    setValue(initialValue);
    setError(null);
  };
  return {
    value,
    error,
    onChangeText: handleChange,
    onBlur: handleBlur,
    reset,
    setValue,
  };
};

export default useInput;
