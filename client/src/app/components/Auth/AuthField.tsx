import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

// Labeled input used by the signup and login forms.
const AuthField = ({label, error, id, ...inputProps}: Props) => {
  const inputId = id ?? inputProps.name;
  return (
    <div className='flex flex-col gap-1'>
      <label
        htmlFor={inputId}
        className='text-sm text-[#b4b4b4]'>
        {label}
      </label>
      <input
        id={inputId}
        className={`h-10 rounded-lg bg-black px-3 text-white placeholder-gray-600 border focus:outline-none focus:border-gray-300 ${
          error ? "border-red-500" : "border-[#2A2A2A]"
        }`}
        aria-invalid={!!error}
        {...inputProps}
      />
      {error && <p className='text-xs text-red-400'>{error}</p>}
    </div>
  );
};

export default AuthField;
