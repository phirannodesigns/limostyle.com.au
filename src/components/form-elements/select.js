import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Select({
  defaultValue = '',
  errors,
  label,
  name,
  options = [],
  register,
  required = true,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">{`${label}${required && ' *'}`}</span>
        <div className="relative mt-1 shadow-sm">
          <select
            id={name}
            name={name}
            defaultValue=""
            required={required}
            aria-invalid={!!errors[name]}
            ref={register({
              required: required && (
                <Error message={`${label} is a required field`} />
              ),
            })}
            className="block w-full h-12 px-4 py-3 text-white placeholder-gray-400 placeholder-opacity-50 transition duration-150 ease-in-out bg-black rounded-none form-select"
          >
            {defaultValue !== '' && (
              <option value="" disabled>
                {`${defaultValue}${required && ' *'}`}
              </option>
            )}
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export { Select };
