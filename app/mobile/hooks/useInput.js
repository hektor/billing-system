import { useState, useEffect } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [showFeedback, setShowFeedback] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setShowFeedback(true);
  };

  const onBlur = (e) => {
    setShowFeedback(true);
  };

  return {
    setShowFeedback,
    showFeedback,
    setValue,
    bind: {
      value,
      onChange,
      onBlur
    }
  };
};
