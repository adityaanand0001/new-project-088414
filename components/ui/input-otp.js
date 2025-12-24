
import React, { useState } from 'react';

export const InputOTP = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <div className="flex space-x-2">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          value={data}
          maxLength="1"
          onChange={e => handleChange(e.target, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          onFocus={e => e.target.select()}
          className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
        />
      ))}
    </div>
  );
};
