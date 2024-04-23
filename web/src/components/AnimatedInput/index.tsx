import React, { useEffect, useState } from 'react';

import AnimatedInputProps from '../../interfaces/animatedInput';

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  type,
  id,
  content,
  elementFunction,
}) => {
  const [focused, setFocused] = useState(content ? true : false);

  useEffect(() => {
    handleBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!content) {
      setFocused(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    elementFunction(e);
  };

  return (
    <div className="relative">
      <label
        className={`absolute transition-all duration-300 text-purple-500 ${
          focused || content
            ? 'text-sm sm:text-[9px] md:text-[10px] text-gray-600 top-2 sm:top-[6px] md:top-[6px] left-3'
            : 'top-1/4 sm:text-[12px] md:text-[12px] left-3'
        } transform ${
          focused || content ? '-translate-y-1/2' : 'translate-y-0'
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full py-3 sm:py-2 md:py-2 px-3 sm:text-[12px] md:text-[14px] border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        type={type}
        id={id}
        value={content}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default AnimatedInput;
